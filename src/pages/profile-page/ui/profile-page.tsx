import {
  classNames, ReducersList, useAppDispatch, useDynamicModuleLoader,
} from 'shared';
import { useTranslation } from 'react-i18next';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/profile';
import { useEffect } from 'react';

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
      <ProfileCard />
    </div>
  );
};

export { ProfilePage };
