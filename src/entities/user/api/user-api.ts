import { rtkApi } from '@/shared';
import { User } from '../model/types/user';
import { JsonSettings } from '@/entities';

interface SetJsonSettingsArg {
  userId: string;
  jsonSettings: JsonSettings;
}

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    setJsonSettings: build.mutation<User, SetJsonSettingsArg>({
      query: ({ userId, jsonSettings }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          jsonSettings,
        },
      }),
    }),
  }),
});

export const setJsonSettingsMutation = userApi.endpoints.setJsonSettings.initiate;
