import { useTranslation } from 'react-i18next';
import { classNames, getFeatureFlag, ListBoxRedesigned, useAppDispatch } from '@/shared';
// import styles from './ui-design-switcher.module.scss';
// import { getProfileData } from '@/features';

interface UiDesignSwitcherProps {
  className?: string;
}

const UiDesignSwitcher = (props: UiDesignSwitcherProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const isAppRedesigned = getFeatureFlag('isAppRedesigned');
  const dispatch = useAppDispatch();
  // const authData = useSelector(getProfileData);

  const items = [
    {
      content: t('Новый'),
      value: 'new',
    },
    {
      content: t('Старый'),
      value: 'old',
    },
  ];

  const onChange = (value: string) => {
    // if (authData?.id) {
    // dispatch(
    //   updateFeatureFlags({
    //     userId: authData.id,
    //     features: {
    //       isAppRedesigned: value === 'new',
    //     },
    //   }),
    // );
    // }
  };

  return (
    <ListBoxRedesigned
      className={classNames('', {}, [className])}
      label={t('Вариант интерфейса') ?? ''}
      items={items}
      value={isAppRedesigned ? 'new' : 'old'}
      // onChange={onChange}
    />
  );
};

export { UiDesignSwitcher };
