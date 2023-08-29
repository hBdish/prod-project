import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox, ListBoxRedesigned, ToggleFeatures } from '@/shared';
import { Currency } from '../../model/types/types';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

const CurrencySelect = memo((prop: CurrencySelectProps) => {
  const { className, value, onChange, readonly = false } = prop;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );

  const props = {
    value,
    className,
    defaultValue: t('Укажите валюту'),
    label: t('Укажите валюту'),
    items: options,
    onChange: onChangeHandler,
    readonly,
  };

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={<ListBoxRedesigned {...props} />}
      off={<ListBox {...props} />}
    />
  );
});

export { CurrencySelect };
