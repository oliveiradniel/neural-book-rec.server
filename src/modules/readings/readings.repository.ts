import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/infra/database/prisma.service';

import { ReadingMapper } from './mappers/reading.mapper';

import { ReadingsRepository } from './contracts/readings-repository';

import type { Reading } from 'src/entities/reading';
import type { UpdateReadingData } from './types/update-reading-data.type';
import type { CreateReadingData } from './types/create-reading-data.type';
import type { ReadingDetails } from './types/reading-details';

@Injectable()
export class PrismaReadingsRepository implements ReadingsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getById(id: string): Promise<Reading | null> {
    const reading = await this.prismaService.reading.findUnique({
      where: {
        id,
      },
    });

    return reading ? ReadingMapper.toDomain(reading) : null;
  }

  async create({
    userId,
    bookId,
    status,
    rating,
  }: CreateReadingData): Promise<ReadingDetails> {
    const createdReading = await this.prismaService.reading.create({
      data: {
        userId,
        bookId,
        status,
        rating,
      },
      select: {
        id: true,
        rating: true,
        status: true,
        book: {
          select: {
            id: true,
            title: true,
            genres: {
              select: {
                literaryGenre: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
              },
            },
            author: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    return ReadingMapper.toDomainDetails(createdReading);
  }

  async update({ id, status, rating }: UpdateReadingData): Promise<Reading> {
    const updatedReading = await this.prismaService.reading.update({
      data: {
        status,
        rating,
      },
      where: {
        id,
      },
    });

    return ReadingMapper.toDomain(updatedReading);
  }
}
