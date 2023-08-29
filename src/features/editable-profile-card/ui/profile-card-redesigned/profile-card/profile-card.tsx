import { useTranslation } from 'react-i18next';
import {
  AvatarRedesigned,
  CardRedesigned,
  classNames,
  Country,
  CountrySelect,
  Currency,
  CurrencySelect,
  Hstack,
  InputRedesigned,
  Loader,
  Vstack,
} from '@/shared';
import styles from './profile-card.module.scss';
import { Profile } from '../../../model/types/profile';
import { TextRedesigned } from '@/shared/ui/redesigned/text';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  onChangeSecondName?: (value: string) => void;
  onChangeName?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
  readonly?: boolean;
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
      <div className={classNames(styles.ProfileCard, {}, [className, styles.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <Hstack
        justify="center"
        align="center"
        className={classNames(styles.ProfileCard, {}, [className, styles.error])}
      >
        <TextRedesigned
          variant="error"
          title={t('ошибка при загрузке карточки профиля') || ''}
          text={error}
          align="center"
        />
      </Hstack>
    );
  }

  return (
    <CardRedesigned
      w100
      padding="24"
      className={classNames(styles.ProfileCard, {}, [className])}
    >
      <Vstack gap="32">
        {data?.avatar && (
          <Hstack
            w100
            justify="center"
            align="center"
            className={styles.avatarWrapper}
          >
            <AvatarRedesigned
              size={128}
              src={data?.avatar}
            />
          </Hstack>
        )}
        <Hstack
          gap="24"
          w100
        >
          <Vstack
            gap="16"
            w100
          >
            <InputRedesigned
              value={data?.first}
              label={t('Имя') || ''}
              className={styles.input}
              onChange={onChangeName}
              readonly={readonly}
              data-testid="ProfileCard.first"
            />
            <InputRedesigned
              value={data?.lastname}
              label={t('Фамилия') || ''}
              className={styles.input}
              onChange={onChangeSecondName}
              readonly={readonly}
              data-testid="ProfileCard.lastname"
            />
            <InputRedesigned
              value={data?.age}
              label={t('Возраст') || ''}
              className={styles.input}
              onChange={onChangeAge}
              readonly={readonly}
              pattern="^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$|^$"
            />
            <InputRedesigned
              value={data?.city}
              label={t('Город') || ''}
              className={styles.input}
              onChange={onChangeCity}
              readonly={readonly}
            />
          </Vstack>
          <Vstack
            gap="16"
            w100
          >
            <InputRedesigned
              value={data?.username}
              label={t('Юзернейм') || ''}
              className={styles.input}
              onChange={onChangeUsername}
              readonly={readonly}
            />
            <InputRedesigned
              value={data?.avatar}
              label={t('Аватар') || ''}
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
        </Hstack>
      </Vstack>
    </CardRedesigned>
  );
};

export { ProfileCard };
