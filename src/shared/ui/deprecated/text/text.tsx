import { memo } from 'react';
import { classNames } from '@/shared';
import styles from './text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
  INVERTED = 'inverted',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

interface TextProps {
  className?: string;
  title?: string | null;
  text?: string | null;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
};

/**
 * @deprecated
 */
const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    'data-testid': dataTestId = 'Text',
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div
      className={classNames(styles.Text, { [styles[theme]]: true }, [
        className,
        styles[theme],
        styles[align],
        styles[size],
      ])}
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

export { Text };
