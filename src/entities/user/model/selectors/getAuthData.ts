import { StateSchema } from '@/app/providers/store-provider';

export const getAuthData = (state: StateSchema) => state.user.authData;
