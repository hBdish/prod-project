import { memo, ReactNode, useCallback } from 'react';
import { CardRedesigned, classNames, Flex, FlexDirection } from '@/shared';
import styles from './tabs.module.scss';

interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
  direction?: FlexDirection;
}

const Tabs = memo((props: TabsProps) => {
  const { className, tabs, value, onTabClick, direction = 'column' } = props;

  const clickHandle = useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  return (
    <Flex
      direction={direction}
      gap="8"
      className={classNames(styles.Tabs, {}, [className])}
    >
      {tabs.map((tab) => (
        <CardRedesigned
          variant={tab.value === value ? 'light' : 'normal'}
          className={styles.tab}
          key={tab.value}
          onClick={clickHandle(tab)}
          border="round"
        >
          {tab.content}
        </CardRedesigned>
      ))}
    </Flex>
  );
});

export { Tabs as TabsRedesigned };
