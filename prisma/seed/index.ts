import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

import { authors, literaryGenres, users } from './data';

import { clearDatabase } from './utils/clear-database';

import { createUsers } from './utils/create-users';
import { createAuthors } from './utils/create-authors';
import { createBooks } from './utils/create-books';
import { createLiteraryGenres } from './utils/create-literary-genres';
import { associatingBooksWithLiteraryGenres } from './utils/associating-books-with-literary-genres';
import { createReadings } from './utils/create-readings';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL is not defined!');
}

const pool = new Pool({ connectionString });

export const prisma = new PrismaClient({
  adapter: new PrismaPg(pool),
});

async function main() {
  await clearDatabase();

  await createUsers({ prisma, users });
  await createAuthors({ prisma, authors });
  await createLiteraryGenres({ prisma, literaryGenres });

  const usersAll = await prisma.user.findMany();
  const authorsAll = await prisma.author.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  const genresAll = await prisma.literaryGenre.findMany();

  await createBooks({ prisma, authorsAll });

  const booksAll = await prisma.book.findMany();

  await associatingBooksWithLiteraryGenres({ prisma, booksAll, genresAll });
  await createReadings({ prisma, usersAll, booksAll });
}

main()
  .catch((err) => {
    console.error('Error while executing seed', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
