import { Controller, Get } from '@nestjs/common';

import { BooksService } from './books.service';

import type { BookWithAuthorAndGenre } from './types/book-with-author-and-genre';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  listAllWithAuthorAndGenres(): Promise<BookWithAuthorAndGenre[]> {
    return this.booksService.listAllWithAuthorAndGenres();
  }
}
