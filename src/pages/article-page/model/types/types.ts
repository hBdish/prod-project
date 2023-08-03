import { EntityState } from '@reduxjs/toolkit';
import { Article } from '@/entities';
import { SortOrder } from '@/shared';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/article';

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string

  // pagination
  page: number
  limit?: number
  hasMore: boolean

  // filters
  view: ArticleView
  order: SortOrder
  sort: ArticleSortField
  search: string
  type: ArticleType

  _inited: boolean
}
