import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { About } from './About';
import configureMockStore from "redux-mock-store";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureMockStore();
const store = mockStore({});

describe('About page', () => {
  afterEach(cleanup)
  
  it('should show basic title', () => {
    const { getByText, container } = render(
      <BrowserRouter> 
        <Provider store={store}>
          <About />
        </Provider>
      </BrowserRouter>
    );
    const title = getByText(/About works/i);
    
    expect(title).toBeInTheDocument();
  });
});



