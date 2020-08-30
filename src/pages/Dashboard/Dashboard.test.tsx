import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Dashboard } from './Dashboard';
import { BrowserRouter } from 'react-router-dom';


describe('About page', () => {
  let container: any = null;

  beforeEach(() => {
     container = render(
      <BrowserRouter> 
        <Dashboard />
      </BrowserRouter>
    );
  });

  afterEach(cleanup)
  
  it('should show error when no authenticated user', () => {
    const { getByText } = container;

    const title = getByText(/Error no user/i);
    
    expect(title).toBeInTheDocument();
  });
});



