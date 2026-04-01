export type ReadingRecommend = {
  rating: number;
  book: BookRecommend;
};

export type BookRecommend = {
  id: string;
  authorId: string;
  literaryGenreIds: string[];
};
