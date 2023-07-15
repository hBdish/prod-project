import {
  memo, MutableRefObject, ReactNode, useRef, UIEvent,
} from 'react';
import {
  classNames, useAppDispatch, useInfiniteScroll, useInitialEffect, useThrottle,
} from 'shared';
import { scrollSaveActions } from 'features/scrolle-save/model/slices';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getScrollSave, getScrollSaveByPath } from 'features/scrolle-save/model/selectors';
import { StateSchema } from 'app/providers';
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

  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const scrollPosition = useSelector((state: StateSchema) => getScrollSaveByPath(state, pathname));

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(scrollSaveActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: pathname,
    }));
  }, 500);

  return (
    <section
      ref={wrapperRef}
      className={classNames(styles.ContentPageBlock, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
});

export { ContentPageBlock };
