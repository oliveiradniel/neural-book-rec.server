import { Prisma } from '@prisma/client';

import { ReadingStatus } from 'src/entities/reading';

export type PrismaBookSummary = Prisma.BookGetPayload<{
  select: {
    id: true;
    title: true;
    author: {
      select: {
        id: true;
        name: true;
      };
    };
    genres: {
      select: {
        literaryGenre: {
          select: {
            id: true;
            name: true;
          };
        };
      };
    };
    _count: {
      select: {
        readings: {
          where: {
            status: ReadingStatus.READ;
          };
        };
      };
    };
  };
}>;
