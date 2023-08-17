import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { Button, ButtonTheme, classNames, Hstack, Text, useAppDispatch } from '@/shared';
import { authDataSelector } from '@/entities';
import { getProfileData } from '../../model/selectors/get-profile-data';
import { profileActions, updateProfileData } from '../../model';
import { getProfileReadonly } from '../../model/selectors/get-profile-readonly/get-profile-readonly';

interface ProfileCardHeaderProps {
  className?: string;
}

const ProfileCardHeader = (props: ProfileCardHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const authData = useSelector(authDataSelector);
  const profile = useSelector(getProfileData);
  const canEdit = authData?.id === profile?.id;

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
    <Hstack
      w100
      justify="between"
      className={classNames('', {}, [className])}
    >
      <Text title={t('Профиль пользователя') || ''} />
      {canEdit && (
        <div>
          {readonly ? (
            <Button
              theme={ButtonTheme.OUTLINE}
              onClick={onEdit}
              data-testid="EditableProfileCardHeader.EditButton"
            >
              {t('Редактировать')}
            </Button>
          ) : (
            <Hstack gap="8">
              <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onSave}
                data-testid="EditableProfileCardHeader.SaveButton"
              >
                {t('Сохранить')}
              </Button>
              <Button
                theme={ButtonTheme.OUTLINE_RED}
                onClick={onCancelEdit}
                data-testid="EditableProfileCardHeader.CancelButton"
              >
                {t('Отменить')}
              </Button>
            </Hstack>
          )}
        </div>
      )}
    </Hstack>
  );
};

export { ProfileCardHeader };
