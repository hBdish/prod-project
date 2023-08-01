import {
  classNames, ReducersList, useDynamicModuleLoader,
} from '@/shared';
import { EditableProfileCard, profileReducer } from '@/features';
import { ContentPageBlock } from '@/widgets';

interface ProfilePageProps {
  className?: string
}
const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  useDynamicModuleLoader({ reducers });

  return (
    <ContentPageBlock className={classNames('', {}, [className])}>
      <EditableProfileCard />
    </ContentPageBlock>
  );
};

export { ProfilePage };
