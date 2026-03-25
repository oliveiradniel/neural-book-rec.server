import { Module } from '@nestjs/common';
import { ReadingsModule } from '../readings/readings.module';

import { BooksService } from './books.service';

import { BooksController } from './books.controller';

@Module({
  imports: [ReadingsModule],
  providers: [BooksService],
  controllers: [BooksController],
  exports: [BooksService],
})
export class BooksModule {}
