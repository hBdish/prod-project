import { StateSchema } from '@/app/providers/store-provider';

export const getProfileValidateError = (state: StateSchema) => state.profile?.validateError;
