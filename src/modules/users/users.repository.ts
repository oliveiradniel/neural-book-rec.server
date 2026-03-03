import { Injectable } from '@nestjs/common';

import { UserMapper } from './mappers/user.mapper';

import { PrismaService } from 'src/infra/database/prisma.service';

import type { UsersRepository } from './contracts/users-repository.contract';
import type { UserWithReadings } from './types/user-with-readings';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllWithReadings(): Promise<UserWithReadings[]> {
    const users = await this.prismaService.user.findMany({
      orderBy: {
        name: 'asc',
      },
      select: {
        id: true,
        name: true,
        age: true,
        _count: {
          select: {
            readings: true,
          },
        },
        readings: {
          select: {
            id: true,
            book: {
              select: {
                title: true,
                genres: {
                  select: {
                    literaryGenre: {
                      select: {
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
            rating: true,
            status: true,
          },
        },
      },
    });

    return UserMapper.toDomainList(users);
  }
}
