import type { Author } from 'src/entities/author';
import type { LiteraryGenre } from 'src/entities/literary-genre';

export type BookSummary = {
  id: string;
  title: string;
  author: Author;
  literaryGenres: LiteraryGenre[];
  countActiveReadings: number;
};
