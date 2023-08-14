import { Flex, FlexProps } from '../flex/flex';

type HstackProps = Omit<FlexProps, 'direction'>;

const Hstack = (props: HstackProps) => (
  <Flex
    {...props}
    direction="row"
  />
);

export { Hstack };
