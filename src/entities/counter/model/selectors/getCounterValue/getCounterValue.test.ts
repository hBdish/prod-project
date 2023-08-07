import { StateSchema } from '@/app/providers/store-provider';
import { getCounterValue } from '../getCounterValue/getCounterValue';

describe('GetCounterValueTest', () => {
  test('', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
