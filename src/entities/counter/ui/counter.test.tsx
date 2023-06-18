import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import componentRender from '../../../shared/lib/test/componentRender';

import { Counter } from './counter';

describe('CounterTest', () => {
  test('test render', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('value')).toHaveTextContent('10');
  });

  test('test render increment', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    userEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value')).toHaveTextContent('11');
  });

  test('test render decrement', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    userEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value')).toHaveTextContent('9');
  });
});
