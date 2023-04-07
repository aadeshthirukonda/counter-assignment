import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  expect(screen.getByTestId('count')).toHaveTextContent(0);
});

test('clicking + increments the count', () => {
  const button = screen.getByText('+');
  fireEvent.click(button);
  expect(screen.getByTestId('count')).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const button = screen.getByText('-');
  fireEvent.click(button);
  expect(screen.getByTestId('count')).toHaveTextContent('-1');
});
