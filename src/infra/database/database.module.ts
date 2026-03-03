import { Global, Module } from '@nestjs/common';

import { EnvModule } from 'src/config/env/env.module';

import { PrismaService } from './prisma.service';

import { PrismaUsersRepository } from 'src/modules/users/users.repository';

@Global()
@Module({
  imports: [EnvModule],
  providers: [PrismaService, PrismaUsersRepository],
  exports: [PrismaService, PrismaUsersRepository],
})
export class DatabaseModule {}
