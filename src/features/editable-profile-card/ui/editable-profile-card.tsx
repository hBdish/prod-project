import {
  classNames, Text, TextTheme, useAppDispatch, useInitialEffect,
} from 'shared';
import { useSelector } from 'react-redux';
import { ProfileCardHeader } from 'features/editable-profile-card/ui/profile-card-header/profile-card-header';
import { useCallback } from 'react';
import {
  fetchProfileData, profileActions, ValidateProfileError,
} from 'features';
import { Currency } from 'helpers/currency';
import { Country } from 'helpers/country';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import {
  getProfileForm, getProfileError, getProfileIsLoading, getProfileReadonly, getProfileValidateError,
} from '../model/selectors';
import { ProfileCard } from './profile-card/profile-card';

interface EditableProfileCardProps {
  className?: string
}

const EditableProfileCard = (props: EditableProfileCardProps) => {
  const {
    className,
  } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile');
  const { id } = useParams<{ id: string}>();

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
    <div className={classNames('', { }, [className])}>
      <ProfileCardHeader />
      {validateErrors?.length && validateErrors.map((err) => (
        <Text
          key={err}
          theme={TextTheme.ERROR}
          text={validateErrorTranslates[err]}
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
    </div>
  );
};

export { EditableProfileCard };
