import type { Book } from 'src/entities/book';
import type { BookWithAuthorAndGenre } from '../types/book-with-author-and-genre';
import type { BookSummary } from '../types/book-summary';
import type { UnreadBook } from '../types/unread-book';

export abstract class BooksRepository {
  abstract getAll(): Promise<Book[]>;
  abstract getBookSummary(): Promise<BookSummary[]>;
  abstract getUnreadBooksByUserId(userId: string): Promise<UnreadBook[]>;
  abstract getAllWithAuthorAndGenres(): Promise<BookWithAuthorAndGenre[]>;
}
