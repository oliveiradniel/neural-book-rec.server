import { Prisma } from '@prisma/client';

export type PrismaUnreadBook = Prisma.BookGetPayload<{
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
        literaryGenreId: true;
        literaryGenre: true;
      };
    };
    _count: {
      select: {
        readings: true;
      };
    };
  };
}>;
