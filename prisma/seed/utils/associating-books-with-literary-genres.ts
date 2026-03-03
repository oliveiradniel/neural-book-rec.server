import { Genre, PrismaClient } from '@prisma/client';

export async function associatingBooksWithLiteraryGenres({
  booksAll,
  genresAll,
  prisma,
}: {
  booksAll: { id: string; title: string }[];
  genresAll: { id: string; name: string }[];
  prisma: PrismaClient;
}) {
  console.log('Associating books with literary genres...');

  const pedraFilosofalId = booksAll.find(
    (b) => b.title === 'Harry Potter e a Pedra Filosofal',
  )!.id;
  const prisioneiroDeAzkabanId = booksAll.find(
    (b) => b.title === 'Harry Potter e o Prisioneiro de Azkaban',
  )!.id;
  const guerraDosTronosId = booksAll.find(
    (b) => b.title === 'A Guerra dos Tronos',
  )!.id;
  const furiaDosReisId = booksAll.find(
    (b) => b.title === 'A Fúria dos Reis',
  )!.id;
  const sociedadeDoAnelId = booksAll.find(
    (b) => b.title === 'O Senhor dos Anéis: A Sociedade do Anel',
  )!.id;
  const hobbitId = booksAll.find((b) => b.title === 'O Hobbit')!.id;
  const fundacaoId = booksAll.find((b) => b.title === 'Fundação')!.id;
  const euRoboId = booksAll.find((b) => b.title === 'Eu, Robô')!.id;
  const iluminadoId = booksAll.find((b) => b.title === 'O Iluminado')!.id;
  const itId = booksAll.find((b) => b.title === 'It: A Coisa')!.id;
  const assassinatoNoExpressoId = booksAll.find(
    (b) => b.title === 'Assassinato no Expresso do Oriente',
  )!.id;
  const naoSobrouNenhumId = booksAll.find(
    (b) => b.title === 'E Não Sobrou Nenhum',
  )!.id;
  const domCasmurroId = booksAll.find((b) => b.title === 'Dom Casmurro')!.id;
  const memoriasPostumasId = booksAll.find(
    (b) => b.title === 'Memórias Póstumas de Brás Cubas',
  )!.id;
  const horaDaEstrelaId = booksAll.find(
    (b) => b.title === 'A Hora da Estrela',
  )!.id;
  const id1984 = booksAll.find((b) => b.title === '1984')!.id;
  const revolucaoDosBichosId = booksAll.find(
    (b) => b.title === 'A Revolução dos Bichos',
  )!.id;
  const admiravelMundoNovoId = booksAll.find(
    (b) => b.title === 'Admirável Mundo Novo',
  )!.id;
  const crimeECastigoId = booksAll.find(
    (b) => b.title === 'Crime e Castigo',
  )!.id;
  const orgulhoEPreconceitoId = booksAll.find(
    (b) => b.title === 'Orgulho e Preconceito',
  )!.id;
  const aventurasDeTomSawyerId = booksAll.find(
    (b) => b.title === 'As Aventuras de Tom Sawyer',
  )!.id;
  const velhoEMarId = booksAll.find((b) => b.title === 'O Velho e o Mar')!.id;
  const cronicasDeNarniaId = booksAll.find(
    (b) => b.title === 'As Crônicas de Nárnia',
  )!.id;
  const codigoDaVinciId = booksAll.find(
    (b) => b.title === 'O Código Da Vinci',
  )!.id;
  const jogosVorazesId = booksAll.find((b) => b.title === 'Jogos Vorazes')!.id;
  const emChamasId = booksAll.find((b) => b.title === 'Em Chamas')!.id;
  const oLadraoDeRaiosId = booksAll.find(
    (b) => b.title === 'Percy Jackson e o Ladrão de Raios',
  )!.id;
  const solEParaTodosId = booksAll.find(
    (b) => b.title === 'O Sol é Para Todos',
  )!.id;
  const frankensteinId = booksAll.find((b) => b.title === 'Frankenstein')!.id;

  const fantasyId = genresAll.find((g) => g.name === Genre.FANTASY)!.id;
  const scienceFictionId = genresAll.find(
    (g) => g.name === Genre.SCIENCE_FICTION,
  )!.id;
  const horrorId = genresAll.find((g) => g.name === Genre.HORROR)!.id;
  const thrillerId = genresAll.find((g) => g.name === Genre.THRILLER)!.id;
  const mysteryId = genresAll.find((g) => g.name === Genre.MYSTERY)!.id;
  const adventureId = genresAll.find((g) => g.name === Genre.ADVENTURE)!.id;
  const dramaId = genresAll.find((g) => g.name === Genre.DRAMA)!.id;
  const romanceId = genresAll.find((g) => g.name === Genre.ROMANCE)!.id;
  const historicalFictionId = genresAll.find(
    (g) => g.name === Genre.HISTORICAL_FICTION,
  )!.id;
  const dystopiaId = genresAll.find((g) => g.name === Genre.DYSTOPIA)!.id;
  const philosophyId = genresAll.find((g) => g.name === Genre.PHILOSOPHY)!.id;
  // const biographyId = genresAll.find((g) => g.name === Genre.BIOGRAPHY)!.id;
  // const selfHelpId = genresAll.find((g) => g.name === Genre.SELF_HELP)!.id;
  // const businessId = genresAll.find((g) => g.name === Genre.BUSINESS)!.id;
  // const scienceId = genresAll.find((g) => g.name === Genre.SCIENCE)!.id;
  // const technologyId = genresAll.find((g) => g.name === Genre.TECHNOLOGY)!.id;
  // const poetryId = genresAll.find((g) => g.name === Genre.POETRY)!.id;
  // const childrenId = genresAll.find((g) => g.name === Genre.CHILDREN)!.id;

  const bookGenres = [
    { bookId: pedraFilosofalId, literaryGenreId: fantasyId },
    { bookId: pedraFilosofalId, literaryGenreId: adventureId },

    { bookId: prisioneiroDeAzkabanId, literaryGenreId: fantasyId },
    { bookId: prisioneiroDeAzkabanId, literaryGenreId: adventureId },

    { bookId: guerraDosTronosId, literaryGenreId: fantasyId },
    { bookId: guerraDosTronosId, literaryGenreId: adventureId },
    { bookId: guerraDosTronosId, literaryGenreId: dramaId },

    { bookId: furiaDosReisId, literaryGenreId: fantasyId },
    { bookId: furiaDosReisId, literaryGenreId: adventureId },
    { bookId: furiaDosReisId, literaryGenreId: dramaId },

    { bookId: sociedadeDoAnelId, literaryGenreId: fantasyId },
    { bookId: sociedadeDoAnelId, literaryGenreId: adventureId },

    { bookId: hobbitId, literaryGenreId: fantasyId },
    { bookId: hobbitId, literaryGenreId: adventureId },

    { bookId: fundacaoId, literaryGenreId: scienceFictionId },
    { bookId: fundacaoId, literaryGenreId: dramaId },

    { bookId: euRoboId, literaryGenreId: scienceFictionId },
    { bookId: euRoboId, literaryGenreId: mysteryId },

    { bookId: iluminadoId, literaryGenreId: horrorId },
    { bookId: iluminadoId, literaryGenreId: thrillerId },
    { bookId: iluminadoId, literaryGenreId: dramaId },

    { bookId: itId, literaryGenreId: horrorId },
    { bookId: itId, literaryGenreId: thrillerId },
    { bookId: itId, literaryGenreId: dramaId },

    {
      bookId: assassinatoNoExpressoId,
      literaryGenreId: mysteryId,
    },
    {
      bookId: assassinatoNoExpressoId,
      literaryGenreId: thrillerId,
    },

    { bookId: naoSobrouNenhumId, literaryGenreId: mysteryId },
    { bookId: naoSobrouNenhumId, literaryGenreId: thrillerId },

    { bookId: domCasmurroId, literaryGenreId: dramaId },
    { bookId: domCasmurroId, literaryGenreId: romanceId },

    { bookId: memoriasPostumasId, literaryGenreId: dramaId },
    { bookId: memoriasPostumasId, literaryGenreId: philosophyId },

    { bookId: horaDaEstrelaId, literaryGenreId: dramaId },

    { bookId: id1984, literaryGenreId: dystopiaId },
    { bookId: id1984, literaryGenreId: scienceFictionId },
    { bookId: id1984, literaryGenreId: dramaId },

    { bookId: revolucaoDosBichosId, literaryGenreId: dystopiaId },
    { bookId: revolucaoDosBichosId, literaryGenreId: dramaId },
    { bookId: revolucaoDosBichosId, literaryGenreId: philosophyId },

    { bookId: admiravelMundoNovoId, literaryGenreId: dystopiaId },
    { bookId: admiravelMundoNovoId, literaryGenreId: scienceFictionId },
    { bookId: admiravelMundoNovoId, literaryGenreId: philosophyId },

    { bookId: crimeECastigoId, literaryGenreId: dramaId },
    { bookId: crimeECastigoId, literaryGenreId: philosophyId },

    { bookId: orgulhoEPreconceitoId, literaryGenreId: romanceId },
    { bookId: orgulhoEPreconceitoId, literaryGenreId: dramaId },
    { bookId: orgulhoEPreconceitoId, literaryGenreId: historicalFictionId },

    { bookId: aventurasDeTomSawyerId, literaryGenreId: adventureId },

    { bookId: velhoEMarId, literaryGenreId: dramaId },
    { bookId: velhoEMarId, literaryGenreId: adventureId },

    { bookId: cronicasDeNarniaId, literaryGenreId: fantasyId },
    { bookId: cronicasDeNarniaId, literaryGenreId: adventureId },

    { bookId: codigoDaVinciId, literaryGenreId: thrillerId },
    { bookId: codigoDaVinciId, literaryGenreId: mysteryId },
    { bookId: codigoDaVinciId, literaryGenreId: adventureId },

    { bookId: jogosVorazesId, literaryGenreId: dystopiaId },
    { bookId: jogosVorazesId, literaryGenreId: adventureId },
    { bookId: jogosVorazesId, literaryGenreId: scienceFictionId },

    { bookId: emChamasId, literaryGenreId: dystopiaId },
    { bookId: emChamasId, literaryGenreId: adventureId },
    { bookId: emChamasId, literaryGenreId: scienceFictionId },

    { bookId: oLadraoDeRaiosId, literaryGenreId: fantasyId },
    { bookId: oLadraoDeRaiosId, literaryGenreId: adventureId },

    { bookId: solEParaTodosId, literaryGenreId: dramaId },
    { bookId: solEParaTodosId, literaryGenreId: historicalFictionId },

    { bookId: frankensteinId, literaryGenreId: horrorId },
    { bookId: frankensteinId, literaryGenreId: dramaId },
    { bookId: frankensteinId, literaryGenreId: scienceFictionId },
  ];

  await prisma.bookLiteraryGenre.createMany({
    data: bookGenres,
  });

  return { booksAll };
}
