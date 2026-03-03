import { Controller, Get } from '@nestjs/common';

import { UsersService } from './users.service';

import { UserWithReadings } from './types/user-with-readings';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  listAllWithReadings(): Promise<UserWithReadings[]> {
    return this.usersService.listAllWithReadings();
  }
}
