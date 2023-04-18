import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('renders the navigation links', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(getByText('Todo List')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Contact')).toBeInTheDocument();
  });

  it('links to the correct routes', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(getByText('Todo List')).toHaveAttribute('href', '/');
    expect(getByText('About')).toHaveAttribute('href', '/about');
    expect(getByText('Contact')).toHaveAttribute('href', '/contact');
  });
});
