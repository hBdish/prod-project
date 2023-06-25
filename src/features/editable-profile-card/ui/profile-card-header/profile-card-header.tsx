import {
  Button, ButtonTheme, classNames, Text, useAppDispatch,
} from 'shared';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { profileActions, updateProfileData } from '../../model';
import { getProfileReadonly } from '../../model/selectors/get-profile-readonly/get-profile-readonly';
import styles from './profile-card-header.module.scss';

interface ProfileCardHeaderProps {
  className?: string
}

const ProfileCardHeader = (props: ProfileCardHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);

  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.canselEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(styles.ProfileCardHeader, {}, [className])}>
      <Text title={t('Профиль пользователя') || ''} />
      {readonly
        ? (
          <Button
            theme={ButtonTheme.OUTLINE}
            className={styles.editBtn}
            onClick={onEdit}
          >
            {t('Редактировать')}
          </Button>
        )
        : (
          <>
            <Button
              theme={ButtonTheme.OUTLINE}
              className={styles.saveBtn}
              onClick={onSave}
            >
              {t('Сохранить')}
            </Button>
            <Button
              theme={ButtonTheme.OUTLINE_RED}
              className={styles.editBtn}
              onClick={onCancelEdit}
            >
              {t('Отменить')}
            </Button>
          </>
        )}
    </div>
  );
};

export { ProfileCardHeader };
