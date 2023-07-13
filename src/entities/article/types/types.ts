import { User } from '../../user/model/types/user';

export enum ArticleView {
  BIG = 'BIG',
  SMALL = 'SMALL',
}

export enum ArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS'
}

export enum ArticleBlockType {
  IMG = 'IMG',
  TEXT = 'TEXT',
  CODE = 'CODE'
}

export interface ArticleBlock {
  id: string
  type: ArticleBlockType
}

export interface ArticleTextBlock extends ArticleBlock{
  type: ArticleBlockType.TEXT
  title?: string
  paragraphs: string[]
}

export interface ArticleCodeBlock extends ArticleBlock {
  type: ArticleBlockType.CODE
  code: string
}

export interface ArticleImgBlock extends ArticleBlock{
  type: ArticleBlockType.IMG
  title: string
  src: string
}

export type Block = ArticleTextBlock | ArticleCodeBlock | ArticleImgBlock

export interface Article {
  id: string
  title: string
  user: User
  subtitle: string
  img: string
  views: number
  createdAt: string
  type: ArticleType[]
  block: Block[]
}
