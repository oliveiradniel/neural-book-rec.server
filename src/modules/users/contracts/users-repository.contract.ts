import { User } from 'src/entities/user';

export abstract class UsersRepository {
  abstract getAll(): Promise<User[]>;
}
