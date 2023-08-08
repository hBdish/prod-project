import { buildSelector } from '@/shared';

export const [useCounterValue, getCounterValue] = buildSelector((state) => state.counter.value);
