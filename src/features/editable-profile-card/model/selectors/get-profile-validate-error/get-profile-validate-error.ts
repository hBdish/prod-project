import { StateSchema } from '@/app/providers';

export const getProfileValidateError = (state: StateSchema) => state.profile?.validateError;
