import { render, screen } from '@testing-library/react';
import Application from '../application/application';
import Users from './users';

describe('Users', () => {

  test('renders correctly', () => {
    render(<Users />);
    const textElement = screen.getByText('Users');
    expect(textElement).toBeInTheDocument();
  });

  test('should show Hello world', async () => {
    render(<Application />);
    await (() => {
      expect(screen.getByText('Hello world')).toBeInTheDocument();
    });
  });

});
