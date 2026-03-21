import { Genre } from 'src/entities/literary-genre';

export type BookWithAuthorAndGenre = {
  id: string;
  title: string;
  author: {
    id: string;
    name: string;
  };
  readerCount: number;
  ratingAverage: number | null;
  literaryGenres: {
    id: string;
    name: Genre;
  }[];
};
