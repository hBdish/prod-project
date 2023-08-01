import { memo } from 'react';
import { classNames, Text, TextAlign } from '@/shared';
import { ArticleImgBlock } from '../../types/types';
import styles from './article-img-block-component.module.scss';

interface ArticleImgBlockComponentProps {
  className?: string
  block: ArticleImgBlock
}

const ArticleImgBlockComponent = memo((props: ArticleImgBlockComponentProps) => {
  const {
    className,
    block,
  } = props;

  return (
    <div className={classNames(styles.ArticleImgBlockComponent, {}, [className])}>
      <img src={block.src} alt={block.title} className={styles.img} />
      {block.title && (
        <Text title={block.title} align={TextAlign.CENTER} />
      )}
    </div>
  );
});

export { ArticleImgBlockComponent };
