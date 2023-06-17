import { classNames } from 'shared';
import styles from './text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
}

const Text = (props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
  } = props;

  return (
    <div className={classNames(styles.Text, { [styles[theme]]: true }, [className])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};

export { Text };
