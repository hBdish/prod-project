import { StateSchema } from 'app/providers';

export const getLoginUsername = (state: StateSchema) => state?.login?.username || '';
