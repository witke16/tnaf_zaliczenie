import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import About from './components/About';
import Contact from './components/Contact';

describe('Main Page', () => {
  it('renders the expected content', () => {
    render(
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<TodoList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    );

    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Add Todo')).toBeInTheDocument();
  });
});
