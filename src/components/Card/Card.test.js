import { render, screen } from '@testing-library/react';
import {Card} from './Card';

test('renders a logo', () => {
const childContent = <div data-testid="child-content">child content</div>;
  render(<Card >
    {childContent}
  </Card>);
  const childElement = screen.getByTestId("child-content");
  expect(childElement).toBeInTheDocument();
});
