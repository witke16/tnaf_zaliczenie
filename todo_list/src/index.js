import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import About from './components/About';
import Contact from './components/Contact';
import './index.css';

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<TodoList/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
