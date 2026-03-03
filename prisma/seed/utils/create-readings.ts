import {
  Book,
  PrismaClient,
  Reading,
  ReadingStatus,
  User,
} from '@prisma/client';

export async function createReadings({
  usersAll,
  booksAll,
  prisma,
}: {
  usersAll: User[];
  booksAll: Book[];
  prisma: PrismaClient;
}) {
  console.log('Creating readings...');

  const user1Id = usersAll[0].id;
  const user2Id = usersAll[1].id;
  const user3Id = usersAll[2].id;
  const user4Id = usersAll[3].id;
  const user5Id = usersAll[4].id;
  const user6Id = usersAll[5].id;
  const user7Id = usersAll[6].id;
  const user8Id = usersAll[7].id;
  // const user9Id = usersAll[8].id;
  // const user10Id = usersAll[9].id;

  const book1Id = booksAll[0].id;
  const book2Id = booksAll[1].id;
  const book3Id = booksAll[2].id;
  const book4Id = booksAll[3].id;
  const book5Id = booksAll[4].id;
  const book6Id = booksAll[5].id;
  const book7Id = booksAll[6].id;
  const book8Id = booksAll[7].id;
  const book9Id = booksAll[8].id;
  const book10Id = booksAll[9].id;

  const readingsData: Omit<Reading, 'id'>[] = [
    { userId: user1Id, bookId: book1Id, rating: 2, status: ReadingStatus.READ },
    { userId: user1Id, bookId: book2Id, rating: 4, status: ReadingStatus.READ },
    {
      userId: user1Id,
      bookId: book9Id,
      rating: null,
      status: ReadingStatus.WANT_TO_READ,
    },

    { userId: user2Id, bookId: book1Id, rating: 4, status: ReadingStatus.READ },
    {
      userId: user2Id,
      bookId: book10Id,
      rating: 4,
      status: ReadingStatus.READ,
    },
    {
      userId: user2Id,
      bookId: book3Id,
      rating: null,
      status: ReadingStatus.WANT_TO_READ,
    },
    {
      userId: user2Id,
      bookId: book4Id,
      rating: null,
      status: ReadingStatus.WANT_TO_READ,
    },

    { userId: user3Id, bookId: book2Id, rating: 3, status: ReadingStatus.READ },
    { userId: user3Id, bookId: book4Id, rating: 4, status: ReadingStatus.READ },
    {
      userId: user3Id,
      bookId: book6Id,
      rating: null,
      status: ReadingStatus.WANT_TO_READ,
    },

    { userId: user4Id, bookId: book3Id, rating: 5, status: ReadingStatus.READ },
    { userId: user4Id, bookId: book5Id, rating: 2, status: ReadingStatus.READ },
    {
      userId: user4Id,
      bookId: book10Id,
      rating: null,
      status: ReadingStatus.WANT_TO_READ,
    },

    { userId: user5Id, bookId: book4Id, rating: 2, status: ReadingStatus.READ },
    { userId: user5Id, bookId: book6Id, rating: 1, status: ReadingStatus.READ },
    {
      userId: user5Id,
      bookId: book10Id,
      rating: null,
      status: ReadingStatus.WANT_TO_READ,
    },

    { userId: user6Id, bookId: book5Id, rating: 5, status: ReadingStatus.READ },
    { userId: user6Id, bookId: book7Id, rating: 4, status: ReadingStatus.READ },
    { userId: user6Id, bookId: book3Id, rating: 4, status: ReadingStatus.READ },

    {
      userId: user7Id,
      bookId: book6Id,
      rating: null,
      status: ReadingStatus.WANT_TO_READ,
    },
    {
      userId: user7Id,
      bookId: book8Id,
      rating: null,
      status: ReadingStatus.WANT_TO_READ,
    },
    {
      userId: user7Id,
      bookId: book3Id,
      rating: null,
      status: ReadingStatus.WANT_TO_READ,
    },

    {
      userId: user8Id,
      bookId: book3Id,
      rating: 4,
      status: ReadingStatus.READ,
    },
    {
      userId: user8Id,
      bookId: book7Id,
      rating: 2,
      status: ReadingStatus.READ,
    },
    {
      userId: user8Id,
      bookId: book8Id,
      rating: 5,
      status: ReadingStatus.READ,
    },
    {
      userId: user8Id,
      bookId: book9Id,
      rating: null,
      status: ReadingStatus.WANT_TO_READ,
    },
    {
      userId: user8Id,
      bookId: book10Id,
      rating: null,
      status: ReadingStatus.WANT_TO_READ,
    },
  ];

  await prisma.reading.createMany({ data: readingsData });
}
