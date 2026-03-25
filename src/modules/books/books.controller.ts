import { Body, Controller, Get, Param, Patch } from '@nestjs/common';

import { BooksService } from './books.service';

import type { BookWithAuthorAndGenre } from './types/book-with-author-and-genre';
import { ReadingIdParamDTO } from './dtos/reading-id.param.dto';
import { ReadingsService } from '../readings/readings.service';
import { UpdateReadingDataDTO } from './dtos/update-reading-data.dto';

@Controller('books')
export class BooksController {
  constructor(
    private readonly booksService: BooksService,
    private readonly readingsService: ReadingsService,
  ) {}

  @Get()
  listAllWithAuthorAndGenres(): Promise<BookWithAuthorAndGenre[]> {
    return this.booksService.listAllWithAuthorAndGenres();
  }

  @Patch('readings/:readingId')
  updateReading(
    @Param() param: ReadingIdParamDTO,
    @Body() data: UpdateReadingDataDTO,
  ) {
    return this.readingsService.update({
      id: param.readingId,
      ...data,
    });
  }
}
