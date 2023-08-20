import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  classNames,
  TestProps,
  toggleFeatures,
  useAppDispatch,
  useInfiniteScroll,
  useInitialEffect,
  useThrottle,
} from '@/shared';
import { getScrollSaveByPath, scrollSaveActions } from '@/features/scrolle-save';
import { StateSchema } from '@/app/providers/store-provider';
import styles from './content-page-block.module.scss';

interface ContentPageBlockProps extends TestProps {
  className?: string;
  children?: ReactNode;
  onScrollEnd?: () => void;
}

const ContentPageBlock = memo((props: ContentPageBlockProps) => {
  const { className, children, onScrollEnd } = props;

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
    dispatch(
      scrollSaveActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: pathname,
      }),
    );
  }, 500);

  return (
    <main
      ref={wrapperRef}
      className={classNames(
        toggleFeatures({
          name: 'isAppRedesigned',
          on: () => styles.ContentPageBlockRedesigned,
          off: () => styles.ContentPageBlock,
        }),
        {},
        [className],
      )}
      onScroll={onScroll}
      data-testid={props['data-testid']}
    >
      {children}
      {onScrollEnd ? (
        <div
          className={styles.trigger}
          ref={triggerRef}
        />
      ) : null}
    </main>
  );
});

export { ContentPageBlock };
