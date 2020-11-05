import { render, screen } from '@testing-library/react';

import Home from '@/pages/index';

describe('Homepage', () => {
  it('Renders the homepage without crashing', () => {
    render(<Home />);
    const h1 = screen.getByRole('heading', { name: 'Welcome to Next.js!' });
    expect(h1).toBeInTheDocument();
  });
});
