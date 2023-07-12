import { render, screen } from '@testing-library/react';
import {Logo} from './Logo';

test('renders a logo', () => {
  render(<Logo />);
  const logoImage = screen.getByRole('img');
  expect(logoImage).toBeInTheDocument();
});
