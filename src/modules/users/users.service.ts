import { Injectable } from '@nestjs/common';

import { PrismaUsersRepository } from './users.repository';

import { UserWithReadings } from './types/user-with-readings';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: PrismaUsersRepository) {}

  listAllWithReadings(): Promise<UserWithReadings[]> {
    return this.usersRepository.getAllWithReadings();
  }
}
