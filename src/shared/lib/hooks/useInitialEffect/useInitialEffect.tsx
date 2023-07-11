import { useEffect } from 'react';
import { fetchArticleById } from 'entities/article/model';

export function useInitialEffect(callback: () => void) {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      callback();
    }
    // eslint-disable-next-line
  }, []);
}
