import { prisma } from '..';

export async function clearDatabase() {
  console.log('Clearing database...');

  await prisma.reading.deleteMany();
  await prisma.bookLiteraryGenre.deleteMany();
  await prisma.book.deleteMany();
  await prisma.literaryGenre.deleteMany();
  await prisma.author.deleteMany();
  await prisma.user.deleteMany();
}
