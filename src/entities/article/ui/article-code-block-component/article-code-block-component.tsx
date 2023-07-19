import { classNames } from 'shared';
import { memo } from 'react';
import { Code } from 'shared/ui/code/code';
import { ArticleCodeBlock } from '../../types/types';
import styles from './article-code-block-component.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
  const {
    className,
    block,
  } = props;

  return (
    <div className={classNames(styles.ArticleCodeBlockComponent, {}, [className])}>
      <Code codeChildren={block.code} />
    </div>
  );
});

export { ArticleCodeBlockComponent };
