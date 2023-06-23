import {
  Button, ButtonTheme, classNames, Input, Text,
} from 'shared';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileError, getProfileIsLoading } from '../../model/selectors';
import styles from './profile-card.module.scss';

interface ProfileCardProps {
  className?: string
}

const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <div className={styles.header}>
        <Text title={t('Профиль пользователя') || ''} />
        <Button
          theme={ButtonTheme.OUTLINE}
          className={styles.editBtn}
        >
          {t('Редактировать')}
        </Button>
      </div>
      <div className={styles.data}>
        <Input
          value={data?.first}
          placeholder={t('Ваше имя') || ''}
          className={styles.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия') || ''}
          className={styles.input}
        />
      </div>
    </div>
  );
};

export { ProfileCard };
