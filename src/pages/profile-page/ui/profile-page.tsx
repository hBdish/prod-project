import {
  classNames, ReducersList, useAppDispatch, useDynamicModuleLoader,
} from 'shared';
import { useTranslation } from 'react-i18next';

import { useEffect } from 'react';
import { EditableProfileCard, fetchProfileData, profileReducer } from 'features';

interface ProfilePageProps {
  className?: string
}
const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile');
  useDynamicModuleLoader({ reducers });
  const dispatch = useAppDispatch();
  dispatch(fetchProfileData());
  useEffect(() => {

  }, [dispatch]);

  return (
    <div className={classNames('', {}, [className])}>
      <EditableProfileCard />
    </div>
  );
};

export { ProfilePage };
