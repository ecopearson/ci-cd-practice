
/* global describe, it, expect */
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting component', () => {
  it('renders the name prop', () => {
    render(<Greeting name="GitHub Actions" />);
    expect(screen.getByText('Hello, GitHub Actions!')).toBeInTheDocument();
  });
});
