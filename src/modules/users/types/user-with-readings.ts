import { ReadingDetails } from 'src/modules/readings/types/reading-details';

export type UserWithReadings = {
  id: string;
  name: string;
  age: number;
  bookCount: {
    read: number;
    wantToRead: number;
  };
  readings: ReadingDetails[];
};
