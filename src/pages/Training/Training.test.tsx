import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Training } from './Training';
import configureMockStore from "redux-mock-store";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Training page', () => {
  afterEach(cleanup)
  
  it('should show basic title', () => {
    const { getByText, container } = render(
      <BrowserRouter> 
        <Provider store={store}>
          <Training />
        </Provider>
      </BrowserRouter>
    );
    const title = getByText(/Training works/i);
    
    expect(title).toBeInTheDocument();
  });
});



