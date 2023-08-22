import { memo } from 'react';
import { classNames } from '@/shared';
import styles from './text.module.scss';

type TextVariant = 'primary' | 'error' | 'accent';

type TextAlign = 'right' | 'left' | 'center';

type TextSize = 'size_s' | 'size_m' | 'size_l';

type HeaderTagType = 'h1' | 'h2' | 'h3';

interface TextProps {
  className?: string;
  title?: string | null;
  text?: string | null;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
  'data-testid'?: string;
}

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  size_s: 'h3',
  size_m: 'h2',
  size_l: 'h1',
};

const Text = memo((props: TextProps) => {
  const {
    className,
    text = '',
    title = '',
    variant = 'primary',
    align = 'left',
    size = 'size_m',
    'data-testid': dataTestId = 'Text',
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div
      className={classNames(styles.Text, {}, [className, styles[variant], styles[align], styles[size]])}
    >
      {title && (
        <HeaderTag
          data-testid={`${dataTestId}.Header`}
          className={styles.title}
        >
          {title ?? ''}
        </HeaderTag>
      )}
      {text && (
        <p
          data-testid={`${dataTestId}.Text`}
          className={styles.text}
        >
          {text ?? ''}
        </p>
      )}
    </div>
  );
});

export { Text as TextRedesigned };
