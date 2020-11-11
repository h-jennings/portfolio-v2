import { screen, render, waitFor } from '@testing-library/react';
import { Footer } from './Footer';

function setup() {
  render(<Footer />);
  const date = new Date();
  const year = date.getFullYear();

  const time = new Intl.DateTimeFormat('en', {
    timeZone: 'America/New_York',
    hour: 'numeric',
    minute: 'numeric',
  }).format(date);

  return {
    year,
    time,
  };
}

describe('Footer Component', () => {
  it('Renders footer HTML in the Document', () => {
    setup();
    const footer = screen.getByLabelText('footer');
    expect(footer).toBeInTheDocument();
  });
  it('Renders the current year and time', async () => {
    const { year, time } = setup();
    const yearElm = screen.getByTestId('year');
    const timeElm = screen.getByTestId('time');

    expect(yearElm).toHaveTextContent(year.toString());
    await waitFor(() => {
      expect(timeElm).toHaveTextContent(time);
    });
  });
});
