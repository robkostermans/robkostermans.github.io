import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home', () => {
  render(<App />);
  const linkElement = screen.getByText((content,element) => element?.tagName.toLowerCase() === 'h1' && content.startsWith('Home'));
  expect(linkElement).toBeInTheDocument();
});
