import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Settings } from './Settings';
import configureMockStore from "redux-mock-store";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Settings page', () => {
  afterEach(cleanup)
  
  it('should show basic title', () => {
    const { getByText, container } = render(
      <BrowserRouter> 
        <Provider store={store}>
          <Settings />
        </Provider>
      </BrowserRouter>
    );
    const title = getByText(/Settings works/i);
    
    expect(title).toBeInTheDocument();
  });
});



