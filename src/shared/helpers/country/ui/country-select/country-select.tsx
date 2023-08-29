import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox, ListBoxRedesigned, ToggleFeatures } from '@/shared';
import { Country } from '../../model/types/types';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.USA, content: Country.USA },
];

const CountrySelect = memo((prop: CountrySelectProps) => {
  const { className, value, onChange, readonly } = prop;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );

  const props = {
    items: options,
    onChange: onChangeHandler,
    value,
    readonly,
    defaultValue: t('Укажите страну') ?? '',
    label: t('Укажите страну') ?? '',
  };

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={<ListBoxRedesigned {...props} />}
      off={<ListBox {...props} />}
    />
  );
});

export { CountrySelect };
