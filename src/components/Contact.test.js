import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Contact from './Contact';

describe('Contact Component', () => {
  it('renders without error', () => {
    render(<Contact />);
  });

  it('handles form submission correctly', () => {
    const { getByLabelText, getByPlaceholderText, getByText } = render(<Contact />);
    const nameInput = getByLabelText('Name:');
    const emailInput = getByLabelText('Email:');
    const messageInput = getByLabelText('Message:');
    const submitButton = getByText('Send');

    // Fill out form fields
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });

    // Submit form
    fireEvent.click(submitButton);

    // Assertions
    expect(nameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(messageInput.value).toBe('');

  });
});
