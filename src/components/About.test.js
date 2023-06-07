import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

describe('About Component', () => {
  it('renders without error', () => {
    render(<About />);
  });

  it('displays the correct text', () => {
    const { getByText, getByAltText } = render(<About />);
    const headingElement = getByText('About');
    const textElement1 = getByText('This is a final project for the subject "Tworzenie nowoczesnych aplikacji frontendowych w praktyce".');
    const textElement2 = getByText('The website was created by Witold Weiner');

    expect(headingElement).toBeInTheDocument();
    expect(textElement1).toBeInTheDocument();
    expect(textElement2).toBeInTheDocument();

  });
});
