import { Flex, FlexProps } from '../flex/flex';

type HstackProps = Omit<FlexProps, 'direction'>;

/**
 *
 * @deprecated
 */
const Hstack = (props: HstackProps) => (
  <Flex
    {...props}
    direction="row"
  />
);

export { Hstack };
