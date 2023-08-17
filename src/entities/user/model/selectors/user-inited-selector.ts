import { StateSchema } from '@/app/providers/store-provider';

export const userInitedSelector = (state: StateSchema) => state.user._inited;
