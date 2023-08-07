import { EntityState } from '@reduxjs/toolkit';
import { Article } from '@/entities';
import { SortOrder } from '@/shared';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/article';

interface ArticlePageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string

  // pagination
  page: number
  limit?: number
  hasMore: boolean

  // filters
  view: ArticleView | 'SMALL'
  order: SortOrder
  sort: ArticleSortField | 'createdAt'
  search: string
  type: ArticleType | 'IT'

  _inited: boolean
}

export type { ArticlePageSchema };
