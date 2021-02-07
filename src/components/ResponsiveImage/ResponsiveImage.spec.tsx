import { render, screen } from '@testing-library/react';
import { ResponsiveImage } from './ResponsiveImage';

const testImageData = {
  src: '/test',
  height: 150,
  width: 300,
};

const { src, height, width } = testImageData;

describe('ResponsiveImage Component', () => {
  it('Renders ResponsiveImage HTML in the Document', () => {
    render(<ResponsiveImage src={src} height={height} width={width} />);
    const container = screen.getByTestId('responsive-image-container');
    expect(container).toBeInTheDocument();
  });
  it('Renders the correct padding value', () => {
    const paddingVal = '50%';
    render(<ResponsiveImage src={src} height={height} width={width} />);
    const container = screen.getByTestId('responsive-image-container');
    expect(container).toHaveStyle(`padding-top: ${paddingVal}`);
  });
});
