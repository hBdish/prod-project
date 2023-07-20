import {
  Avatar,
  classNames, Hstack, Input,
  Loader,
  Text,
  TextAlign,
  TextTheme, Vstack,
} from 'shared';
import { useTranslation } from 'react-i18next';
import { Currency, CurrencySelect } from 'helpers/currency';

import { Country, CountrySelect } from 'helpers/country';
import styles from './profile-card.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  onChangeSecondName?: (value: string) => void
  onChangeName?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeCity?: (value: string) => void
  onChangeUsername?: (value: string) => void
  onChangeAvatar?: (value: string) => void
  onChangeCurrency?: (value: Currency) => void
  onChangeCountry?: (value: Country) => void
  readonly?: boolean
}

const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    onChangeSecondName,
    onChangeName,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
    readonly,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(styles.ProfileCard, { }, [className, styles.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <Hstack
        justify="center"
        align="center"
        className={classNames(styles.ProfileCard, { }, [className, styles.error])}
      >
        <Text
          theme={TextTheme.ERROR}
          title={t('ошибка при загрузке карточки профиля') || ''}
          text={error}
          align={TextAlign.CENTER}
        />
      </Hstack>
    );
  }

  return (
    <Vstack
      gap="8"
      w100
      className={classNames(styles.ProfileCard, {}, [className])}
    >
      {data?.avatar && (
        <Hstack
          w100
          justify="center"
          align="center"
          className={styles.avatarWrapper}
        >
          <Avatar src={data?.avatar} />
        </Hstack>
      )}
      <Input
        value={data?.first}
        placeholder={t('Ваше имя') || ''}
        className={styles.input}
        onChange={onChangeName}
        readonly={readonly}
      />
      <Input
        value={data?.lastname}
        placeholder={t('Ваша фамилия') || ''}
        className={styles.input}
        onChange={onChangeSecondName}
        readonly={readonly}
      />
      <Input
        value={data?.age}
        placeholder={t('Ваш возраст') || ''}
        className={styles.input}
        onChange={onChangeAge}
        readonly={readonly}
        pattern="^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$|^$"
      />
      <Input
        value={data?.city}
        placeholder={t('Ваш город') || ''}
        className={styles.input}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        value={data?.username}
        placeholder={t('Ваш юзернейм') || ''}
        className={styles.input}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        value={data?.avatar}
        placeholder={t('Ссылка на аватар') || ''}
        className={styles.input}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        className={styles.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={styles.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </Vstack>
  );
};

export { ProfileCard };
