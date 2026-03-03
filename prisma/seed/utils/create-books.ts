import { PrismaClient } from '@prisma/client';

export async function createBooks({
  authorsAll,
  prisma,
}: {
  authorsAll: { id: string; name: string }[];
  prisma: PrismaClient;
}) {
  console.log('Creating books...');

  const jkRowlingId = authorsAll.find((a) => a.name === 'J.K. Rowling')!.id;
  const georgeMartinId = authorsAll.find(
    (a) => a.name === 'George R.R. Martin',
  )!.id;
  const jrrTolkienId = authorsAll.find((a) => a.name === 'J.R.R. Tolkien')!.id;
  const isaacAsimovId = authorsAll.find((a) => a.name === 'Isaac Asimov')!.id;
  const stephenKingId = authorsAll.find((a) => a.name === 'Stephen King')!.id;
  const agathaChristieId = authorsAll.find(
    (a) => a.name === 'Agatha Christie',
  )!.id;
  const machadoDeAssisId = authorsAll.find(
    (a) => a.name === 'Machado de Assis',
  )!.id;
  const clariceLispectorId = authorsAll.find(
    (a) => a.name === 'Clarice Lispector',
  )!.id;
  const georgeOrwellId = authorsAll.find((a) => a.name === 'George Orwell')!.id;
  const aldousHuxleyId = authorsAll.find((a) => a.name === 'Aldous Huxley')!.id;
  const dostoiévskiId = authorsAll.find(
    (a) => a.name === 'Fiódor Dostoiévski',
  )!.id;
  const janeAustenId = authorsAll.find((a) => a.name === 'Jane Austen')!.id;
  const markTwainId = authorsAll.find((a) => a.name === 'Mark Twain')!.id;
  const ernestHemingwayId = authorsAll.find(
    (a) => a.name === 'Ernest Hemingway',
  )!.id;
  const csLewisId = authorsAll.find((a) => a.name === 'C.S. Lewis')!.id;
  const danBrownId = authorsAll.find((a) => a.name === 'Dan Brown')!.id;
  const suzanneCollinsId = authorsAll.find(
    (a) => a.name === 'Suzanne Collins',
  )!.id;
  const rickRiordanId = authorsAll.find((a) => a.name === 'Rick Riordan')!.id;
  const harperLeeId = authorsAll.find((a) => a.name === 'Harper Lee')!.id;
  const maryShelleyId = authorsAll.find((a) => a.name === 'Mary Shelley')!.id;

  const books = [
    { title: 'Harry Potter e a Pedra Filosofal', authorId: jkRowlingId },
    {
      title: 'Harry Potter e o Prisioneiro de Azkaban',
      authorId: jkRowlingId,
    },
    { title: 'A Guerra dos Tronos', authorId: georgeMartinId },

    { title: 'A Fúria dos Reis', authorId: georgeMartinId },
    {
      title: 'O Senhor dos Anéis: A Sociedade do Anel',
      authorId: jrrTolkienId,
    },
    { title: 'O Hobbit', authorId: jrrTolkienId },
    { title: 'Fundação', authorId: isaacAsimovId },
    { title: 'Eu, Robô', authorId: isaacAsimovId },
    { title: 'O Iluminado', authorId: stephenKingId },
    { title: 'It: A Coisa', authorId: stephenKingId },
    {
      title: 'Assassinato no Expresso do Oriente',
      authorId: agathaChristieId,
    },
    { title: 'E Não Sobrou Nenhum', authorId: agathaChristieId },
    { title: 'Dom Casmurro', authorId: machadoDeAssisId },
    { title: 'Memórias Póstumas de Brás Cubas', authorId: machadoDeAssisId },
    { title: 'A Hora da Estrela', authorId: clariceLispectorId },
    { title: '1984', authorId: georgeOrwellId },
    { title: 'A Revolução dos Bichos', authorId: georgeOrwellId },
    { title: 'Admirável Mundo Novo', authorId: aldousHuxleyId },
    { title: 'Crime e Castigo', authorId: dostoiévskiId },
    { title: 'Orgulho e Preconceito', authorId: janeAustenId },
    { title: 'As Aventuras de Tom Sawyer', authorId: markTwainId },
    { title: 'O Velho e o Mar', authorId: ernestHemingwayId },
    { title: 'As Crônicas de Nárnia', authorId: csLewisId },
    { title: 'O Código Da Vinci', authorId: danBrownId },
    { title: 'Jogos Vorazes', authorId: suzanneCollinsId },
    { title: 'Em Chamas', authorId: suzanneCollinsId },
    { title: 'Percy Jackson e o Ladrão de Raios', authorId: rickRiordanId },
    { title: 'O Sol é Para Todos', authorId: harperLeeId },
    { title: 'Frankenstein', authorId: maryShelleyId },
  ];

  await prisma.book.createMany({ data: books });
}
