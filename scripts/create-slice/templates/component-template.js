const interfaceConst = 'interface';

module.exports = (componentName, layerName) => `import { classNames } from 'shared';
import { useTranslation } from 'react-i18next';
import styles from './${layerName}.module.scss';

${interfaceConst} ${componentName}Props {
  className?: string
}

const ${componentName} = (props: ${componentName}Props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.${componentName}, {}, [className])} />
  );
};

export { ${componentName} }`;
