import { rtkApi } from '@/shared';
import { Notifications } from '../model/types/notifications';

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notifications[], null>({
      query: () => ({
        url: '/notification',
      }),
    }),
  }),
});

export const useNotificationsList = notificationApi.useGetNotificationsQuery;
