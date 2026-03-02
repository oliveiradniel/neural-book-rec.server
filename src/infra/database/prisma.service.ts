import { Injectable } from '@nestjs/common';

import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from 'generated/prisma/client';
import { Pool } from 'pg';

import { EnvService } from 'src/config/env/env.service';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(private readonly envService: EnvService) {
    const connectionString = envService.databaseURL;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool);

    super({ adapter });
  }
}
