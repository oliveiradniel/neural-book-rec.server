import type { Reading } from 'src/entities/reading';
import type { UpdateReadingData } from '../types/update-reading-data.type';
import type { CreateReadingData } from '../types/create-reading-data.type';
import type { ReadingDetails } from '../types/reading-details';

export abstract class ReadingsRepository {
  abstract getById(id: string): Promise<Reading | null>;
  abstract create(data: CreateReadingData): Promise<ReadingDetails>;
  abstract update(data: UpdateReadingData): Promise<Reading>;
}
