import { Flex, FlexProps } from '@/shared';

type VstackProps = Omit<FlexProps, 'direction'>;

/**
 *
 * @deprecated
 */
const Vstack = (props: VstackProps) => (
  <Flex
    {...props}
    direction="column"
  />
);

export { Vstack };
