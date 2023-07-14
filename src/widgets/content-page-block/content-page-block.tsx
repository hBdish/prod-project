import {
  memo, MutableRefObject, ReactNode, useRef,
} from 'react';
import { classNames, useInfiniteScroll } from 'shared';
import styles from './content-page-block.module.scss';

interface ContentPageBlockProps {
  className?: string
  children?: ReactNode
  onScrollEnd?: () => void
}

const ContentPageBlock = memo((props: ContentPageBlockProps) => {
  const {
    className,
    children,
    onScrollEnd,
  } = props;

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section
      ref={wrapperRef}
      className={classNames(styles.ContentPageBlock, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
});

export { ContentPageBlock };
