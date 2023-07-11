import { Country, Currency } from 'helpers';
import TestImg from 'shared/assets/for-test/test-img.png';
import { fetchProfileData } from './fetch-profile-data';
import TestAsyncThunk from '../../../../../shared/lib/test/test-async-thunk';

const data = {
  username: 'admin',
  age: 20,
  country: Country.Kazakhstan,
  lastname: 'TestLastName',
  first: 'TestFirstName',
  city: 'Almaty',
  currency: Currency.RUB,
  avatar: TestImg,
};

describe('fetchDataTest', () => {
  test('success fetch', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('unsuccessful fetch', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
