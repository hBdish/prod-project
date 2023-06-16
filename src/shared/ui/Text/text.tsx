import { classNames } from 'shared';
import styles from './text.module.scss';

interface TextProps {
  className?: string
  title?: string
  text?: string
}

const Text = ({ className, text, title }: TextProps) => {
  let t;
  return (
    <div className={classNames(styles.Text, {}, [className])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};

export { Text };
