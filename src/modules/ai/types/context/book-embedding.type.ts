import { Genre } from 'src/entities/literary-genre';

type NumericArray = Float32Array | Int32Array | Uint8Array;

export type BookEmbedding = {
  id: string;
  title: string;
  author: string;
  literaryGenres: Genre[];
  countActiveReadings: number;
  embed: NumericArray;
};
