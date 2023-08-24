/*
 * Intersection Observer API
 */

import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScroll {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLDivElement>;
  wrapperRef?: MutableRefObject<HTMLDivElement>;
}

export function useInfiniteScroll({ callback, wrapperRef, triggerRef }: UseInfiniteScroll) {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const wrapperElement = wrapperRef?.current || null;

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [triggerRef, wrapperRef, callback]);
}
