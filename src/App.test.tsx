import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'

afterEach(cleanup)

it('renders application login page', () => {
  const history = createMemoryHistory()
  history.push('login');

  const { getByText } = render(
    <Router history={history} >
      <App />
    </Router>);
  const linkElement = getByText(/Login with Strava/i);
  expect(linkElement).toBeInTheDocument();
});

