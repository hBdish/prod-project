import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './button';

describe('button', () => {
  test('button simple test', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('button simple test with Theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
