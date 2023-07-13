import {
  classNames, ReducersList, useDynamicModuleLoader,
} from 'shared';
import { EditableProfileCard, profileReducer } from 'features';

interface ProfilePageProps {
  className?: string
}
const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  useDynamicModuleLoader({ reducers });

  return (
    <div className={classNames('', {}, [className])}>
      <EditableProfileCard />
    </div>
  );
};

export { ProfilePage };
