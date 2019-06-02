import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MemoryRouter as Router } from "react-router-dom"

it('renders without crashing', () => {
  const wrapper = shallow(
    <Router>
      <App />
    </Router>);
});
