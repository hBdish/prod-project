import { memo, useCallback } from 'react';
import { classNames, CopyIconDeprecated } from '@/shared';
import styles from './code.module.scss';

interface CodeProps {
  className?: string;
  codeChildren: string;
}

/**
 *
 * @deprecated
 */
const Code = memo((props: CodeProps) => {
  const { className, codeChildren } = props;

  const onCopyClick = useCallback(() => {
    navigator.clipboard.writeText(codeChildren).then((data) => data);
  }, [codeChildren]);

  return (
    <pre className={classNames(styles.Code, {}, [className])}>
      <button
        onClick={onCopyClick}
        type="button"
        className={styles.copyBtn}
      >
        <CopyIconDeprecated className={styles.copyIcon} />
      </button>
      <code>{codeChildren}</code>
    </pre>
  );
});

export { Code };
