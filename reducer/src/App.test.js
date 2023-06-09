import { render, screen } from '@testing-library/react';
import App from './App';

test('renders task title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Prague itinerary/i);
  expect(linkElement).toBeInTheDocument();
});
