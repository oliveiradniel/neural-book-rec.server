import type { BaseContext } from '../context/context.types';
import type { BookRecommend } from '../recommend.types';

export type EmbedBookProps = {
  context: BaseContext;
  book: BookRecommend;
};
