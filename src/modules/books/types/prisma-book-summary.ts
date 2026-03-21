import { Prisma } from '@prisma/client';

export type PrismaBookSummary = Prisma.BookGetPayload<{
  select: {
    id: true;
    title: true;
    authorId: true;
    genres: {
      select: {
        literaryGenreId: true;
      };
    };
  };
}>;
