import { StateSchema } from '@/app/providers/store-provider';

export const getAddCommentText = (state: StateSchema) => state.addComment?.text ?? '';
export const getAddCommentError = (state: StateSchema) => state.addComment?.error;
