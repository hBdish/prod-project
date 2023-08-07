import { Country, Currency } from '@/shared';
import TestImg from '@/shared/assets/for-test/test-img.png';
import { ValidateProfileError } from '../../const/editableProfileCardConst';
import { updateProfileData } from './update-profile-data';
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

describe('updateDataTest', () => {
  test('success update', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('unsuccessful update', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR,
    ]);
  });

  test('unsuccessful update with validation error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastname: '' },
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });
});
