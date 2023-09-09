import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders gpt-prompt-templates', () => {
  render(<App />);
  const textElement = screen.getByText(/gpt-prompt-templates/i);
  expect(textElement).toBeInTheDocument();
});
