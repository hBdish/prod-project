import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './sidebar';
import componentRender from '../../../../shared/lib/test/componentRender';

describe('Sidebar', () => {
  test('with only first param', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('test-sidebar')).toBeInTheDocument();
  });

  test('with only first param', () => {
    componentRender(<Sidebar />);
    const toggleButton = screen.getByTestId('test-sidebar-toggle');
    expect(screen.getByTestId('test-sidebar')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('test-sidebar')).toHaveClass('collapsed');
  });
});
