import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared';
import { Country } from '../../model/types/types';

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.USA, content: Country.USA },
];

const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly,
  } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <ListBox
      items={options}
      onChange={onChangeHandler}
      value={value}
      readonly={readonly}
      defaultValue={t('Укажите страну') ?? ''}
      label={t('Укажите страну') ?? ''}
    />
    // <Select
    //   className={classNames('', {}, [className])}
    //   label={t('Укажите валюту') || ''}
    //   options={options}
    //   value={value}
    //   onChange={onChangeHandler}
    //   readonly={readonly}
    // />
  );
});

export { CountrySelect };
