import { $Enums, PrismaClient } from '@prisma/client';

export async function createLiteraryGenres({
  literaryGenres,
  prisma,
}: {
  literaryGenres: {
    name: $Enums.Genre;
  }[];
  prisma: PrismaClient;
}) {
  console.log('Creating literary genres...');

  await prisma.literaryGenre.createMany({
    data: literaryGenres,
  });
}
