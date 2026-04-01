import type { BaseContext } from '../context/context.types';
import type { ReadingRecommend } from '../recommend.types';

export type EmbedReadingProps = {
  context: BaseContext;
  reading: ReadingRecommend;
};
