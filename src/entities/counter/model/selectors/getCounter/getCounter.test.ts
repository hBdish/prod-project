import { getCounter } from 'entities/counter/model/selectors/getCounter/getCounter';
import { StateSchema } from 'app/providers';

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
