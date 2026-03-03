import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/infra/database/prisma.service';

import type { User } from 'src/entities/user';
import type { UsersRepository } from './contracts/users-repository.contract';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  getAll(): Promise<User[]> {
    return this.prismaService.user.findMany({
      orderBy: {
        name: 'asc',
      },
      include: {
        readings: {
          select: {
            book: true,
          },
        },
      },
    });
  }
}
