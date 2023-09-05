import { useTranslation } from 'react-i18next';
import { classNames, Vstack } from '@/shared';
// import styles from './settings-page.module.scss';
import { TextRedesigned } from '@/shared/ui/redesigned/text';
import { UiDesignSwitcher } from '@/features';

interface SettingsPageProps {
  className?: string;
}

const SettingsPage = (props: SettingsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames('', {}, [className])}>
      <Vstack>
        <TextRedesigned title={t('Настройки')} />
        <UiDesignSwitcher />
      </Vstack>
    </div>
  );
};

export { SettingsPage };
