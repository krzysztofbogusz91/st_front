import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LogInPage from './LogInPage';


describe('Login page', () => {
  afterEach(cleanup)
  
  it('shows login screen', () => {
    const { getByText, container } = render(
      <BrowserRouter>
        <LogInPage />
      </BrowserRouter>);
    const stravaLogin = getByText(/Login with Strava/i);
    
    expect(stravaLogin).toBeInTheDocument();
  });
});



