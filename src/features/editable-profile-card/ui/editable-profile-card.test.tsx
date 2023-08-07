import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { $api, Country, Currency } from '@/shared';
import { EditableProfileCard } from './editable-profile-card';
import componentRender from '@/shared/lib/test/componentRender';
// eslint-disable-next-line pc-test/layer-imports
import { Profile, profileReducer } from '@/features';

const profile: Profile = {
  id: '1',
  first: 'admin',
  lastname: 'admin',
  age: 46,
  currency: Currency.EUR,
  country: Country.Russia,
  city: 'Voroniezh',
  username: 'kriper228',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: { id: '1', username: 'admin' },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('EditableProfileCard', () => {
  test('change button', async () => {
    componentRender(<EditableProfileCard />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
  });

  test('cancel button', async () => {
    componentRender(<EditableProfileCard />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.first'));
    await userEvent.type(screen.getByTestId('ProfileCard.first'), 'newFirtsname');

    expect(screen.getByTestId('ProfileCard.first')).toHaveValue('newFirtsname');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

    expect(screen.getByTestId('ProfileCard.first')).toHaveValue('admin');
    expect(screen.getByTestId('EditableProfileCardHeader.EditButton')).toBeInTheDocument();
  });

  test('valid error', async () => {
    componentRender(<EditableProfileCard />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.first'));

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(screen.getByTestId('EditableProfileCard.ERROR.Text')).toBeInTheDocument();
  });

  test('valid valid', async () => {
    const mockPutReq = jest.spyOn($api, 'put');
    componentRender(<EditableProfileCard />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.first'));
    await userEvent.type(screen.getByTestId('ProfileCard.first'), 'user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(mockPutReq).toHaveBeenCalled();
  });
});
