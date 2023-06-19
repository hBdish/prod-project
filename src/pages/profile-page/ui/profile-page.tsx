import { classNames, ReducersList, useDynamicModuleLoader } from 'shared';
import { useTranslation } from 'react-i18next';
import { profileReducer } from 'entities/profile';

interface ProfilePageProps {
  className?: string
}
const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile');
  useDynamicModuleLoader({ reducers });
  return (
    <div className={classNames('', {}, [className])}>
      {t('страница профиля')}
    </div>
  );
};

export { ProfilePage };
