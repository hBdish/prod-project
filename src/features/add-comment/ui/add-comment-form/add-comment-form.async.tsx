import { lazy } from 'react';

const AddCommentFormAsync = lazy(() => import('./add-comment-form')
  .then((module) => ({ default: module.AddCommentForm })));

export { AddCommentFormAsync as AddCommentForm };
