import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { EnvModule } from './config/env/env.module';

import { envValidate } from './config/env/env.validate';

import { EnvironmentVariablesDTO } from './config/env/env.dto';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validate: (config) => envValidate(config, EnvironmentVariablesDTO),
    }),
    EnvModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
