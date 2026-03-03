import { PrismaClient } from '@prisma/client';

export async function createAuthors({
  authors,
  prisma,
}: {
  authors: { name: string }[];
  prisma: PrismaClient;
}) {
  console.log('Creating authors...');

  await prisma.author.createMany({ data: authors });
}
