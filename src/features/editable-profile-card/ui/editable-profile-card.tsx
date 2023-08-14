import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  classNames, Country, Currency, Text, TextTheme, useAppDispatch, useInitialEffect, Vstack,
} from '@/shared';
import { fetchProfileData } from '../model/services/fetch-profile-data';
import { ValidateProfileError } from '../model/const/editableProfileCardConst';
import { ProfileCardHeader } from '../ui/profile-card-header/profile-card-header';
import {
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateError,
} from '../model/selectors';
import { ProfileCard } from './profile-card/profile-card';
import { profileActions } from '../model/slice/profile-slice';

interface EditableProfileCardProps {
  className?: string
  id?: string
}

const EditableProfileCard = (props: EditableProfileCardProps) => {
  const {
    className,
    id,
  } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile');

  useInitialEffect(() => {
    if (id) dispatch(fetchProfileData(id));
  });

  const onChangeName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value || '' }));
  }, [dispatch]);

  const onChangeSecondName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((value?: Currency) => {
    dispatch(profileActions.updateProfile({ currency: value }));
  }, [dispatch]);

  const onChangeCountry = useCallback((value?: Country) => {
    dispatch(profileActions.updateProfile({ country: value }));
  }, [dispatch]);

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateError);
  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректна указана страна'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Некорректные имя или фамилия'),
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    [ValidateProfileError.NO_DATA]: t('Нет данных'),
  };

  return (
    <div className={classNames('', {}, [className])}>
      <Vstack gap="16" w100>
        <ProfileCardHeader />
        {validateErrors?.length && validateErrors.map((err) => (
          <Text
            key={err}
            theme={TextTheme.ERROR}
            text={validateErrorTranslates[err]}
            data-testid="EditableProfileCard.ERROR"
          />
        ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeName={onChangeName}
          onChangeSecondName={onChangeSecondName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readonly={readonly}
        />
      </Vstack>
    </div>
  );
};

export { EditableProfileCard };
