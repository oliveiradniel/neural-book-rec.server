import { Reading as PrismaReading } from '@prisma/client';
import { Reading as DomainReading } from 'src/entities/reading';

import { UserMapper } from 'src/modules/users/mappers/user.mapper';

import type { ReadingDetails } from '../types/reading-details';
import type { PrismaReadingDetails } from '../types/prisma-reading-details';

export class ReadingMapper {
  static toDomain(reading: PrismaReading): DomainReading {
    return {
      id: reading.id,
      userId: reading.userId,
      bookId: reading.bookId,
      status: UserMapper.toDomainReadingStatus(reading.status),
      rating: reading.rating,
    };
  }

  static toDomainDetails(reading: PrismaReadingDetails): ReadingDetails {
    const literaryGenres = reading.book.genres.map((genre) => ({
      id: genre.literaryGenre.id,
      name: UserMapper.toDomainGenre(genre.literaryGenre.name),
    }));

    const status = UserMapper.toDomainReadingStatus(reading.status);

    return {
      id: reading.id,
      book: {
        id: reading.book.id,
        title: reading.book.title,
        author: {
          id: reading.book.author.id,
          name: reading.book.author.name,
        },
        literaryGenres,
      },
      rating: reading.rating,
      status,
    };
  }

  static toDomainDetailsList(
    readings: PrismaReadingDetails[],
  ): ReadingDetails[] {
    return readings.map((reading) => ReadingMapper.toDomainDetails(reading));
  }
}
