import { Article } from '../../types/types';

export interface ArticleDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: Article;
}
