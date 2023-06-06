import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from 'widgets';
import { renderWithTranslation } from 'shared';

describe('Sidebar', () => {
  test('with only first param', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('test-sidebar')).toBeInTheDocument();
  });

  test('with only first param', () => {
    renderWithTranslation(<Sidebar />);
    const toggleButton = screen.getByTestId('test-sidebar-toggle');
    expect(screen.getByTestId('test-sidebar')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('test-sidebar')).toHaveClass('collapsed');
  });
});
