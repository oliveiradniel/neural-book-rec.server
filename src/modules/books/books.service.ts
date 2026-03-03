import { Injectable } from '@nestjs/common';

import { PrismaBooksRepository } from './books.repository';

import type { BookWithAuthorAndGenre } from './types/book-with-author-and-genre';

@Injectable()
export class BooksService {
  constructor(private readonly booksRepository: PrismaBooksRepository) {}

  listAllWithAuthorAndGenres(): Promise<BookWithAuthorAndGenre[]> {
    return this.booksRepository.getAllWithAuthorAndGenres();
  }
}
