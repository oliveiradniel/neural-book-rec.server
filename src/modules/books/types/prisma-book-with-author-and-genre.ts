import { Prisma } from '@prisma/client';

export type PrismaBookWithAuthorAndGenre = Prisma.BookGetPayload<{
  select: {
    id: true;
    title: true;
    author: {
      select: {
        id: true;
        name: true;
      };
    };
    readings: {
      select: {
        rating: true;
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
        readings: true;
      };
    };
  };
}>;
