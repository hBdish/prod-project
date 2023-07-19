import { classNames, Text } from 'shared';
import { memo } from 'react';
import { ArticleTextBlock } from '../../types/types';
import styles from './article-text-block-component.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const {
    className,
    block,
  } = props;

  return (
    <div className={classNames(styles.ArticleTextBlockComponent, {}, [className])}>
      {block.title && (
        <Text title={block.title} className={styles.title} />
      )}
      {block.paragraphs && (
        <>
          {block.paragraphs.map(
            (paragraph) => (
              <Text
                key={paragraph}
                text={paragraph}
                className={styles.paragraph}
              />
            ),
          )}
        </>
      )}
    </div>
  );
});

export { ArticleTextBlockComponent };
