import { ReadingStatus } from 'src/entities/reading';

export type CreateReadingData = {
  userId: string;
  bookId: string;
  status: ReadingStatus;
  rating?: number;
};
