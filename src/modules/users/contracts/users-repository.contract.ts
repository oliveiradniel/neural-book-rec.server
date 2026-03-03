import type { UserWithReadings } from '../types/user-with-readings';

export abstract class UsersRepository {
  abstract getAllWithReadings(): Promise<UserWithReadings[]>;
}
