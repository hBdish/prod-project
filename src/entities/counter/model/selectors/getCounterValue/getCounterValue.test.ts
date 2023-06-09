import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers';
import { getCounterValue } from 'entities/counter/model/selectors/getCounterValue/getCounterValue';

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
