import { ListBox } from 'shared';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Currency } from '../../model/types/types';

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly = false,
  } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <ListBox
      items={options}
      defaultValue={t('Укажите валюту') ?? ''}
      label={t('Укажите валюту') ?? ''}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
      direction="top"
    />
  );

  // return (
  //   <Selec
  //     className={classNames('', {}, [className])}
  //     label={t('Укажите валюту') || ''}
  //     options={options}
  //     value={value}
  //     onChange={onChangeHandler}
  //     readonly={readonly}
  //   />
  // );
});

export { CurrencySelect };
