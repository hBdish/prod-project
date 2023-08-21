import { render, screen } from '@testing-library/react';
import { ButtonRedesigned } from './button';

describe('button', () => {
  test('button simple test', () => {
    render(<ButtonRedesigned>TEST</ButtonRedesigned>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('button simple test with Theme', () => {
    render(<ButtonRedesigned variant="outline">TEST</ButtonRedesigned>);
    expect(screen.getByText('TEST')).toHaveClass('outline');
  });
});
