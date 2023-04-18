import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList Component', () => {
  it('renders without error', () => {
    render(<TodoList />);
  });

  it('displays entered todo item', () => {
    const { getByText, getByPlaceholderText } = render(<TodoList />);
    const inputElement = getByPlaceholderText('Enter a new todo...');
    fireEvent.change(inputElement, { target: { value: 'Test todo' } });
    fireEvent.submit(inputElement);
    const todoElement = getByText('Test todo');
    expect(todoElement).toBeInTheDocument();
  });
  
});