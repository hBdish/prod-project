import { useParams } from 'react-router-dom';
import { classNames, ReducersList, useDynamicModuleLoader } from '@/shared';
import { EditableProfileCard, profileReducer } from '@/features';
import { ContentPageBlock } from '@/widgets';

interface ProfilePageProps {
  className?: string;
}
const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();
  useDynamicModuleLoader({ reducers });

  return (
    <ContentPageBlock
      data-testid="ProfilePage"
      className={classNames('', {}, [className])}
    >
      <EditableProfileCard id={id} />
    </ContentPageBlock>
  );
};

export { ProfilePage };
