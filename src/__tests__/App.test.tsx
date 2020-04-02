import {render} from '@testing-library/react';
import React from 'react';
import {App} from '../App';

describe('App', () => {

  it('renders search button', () => {
    const {getByText} = render(<App/>);
    const searchButton = getByText(/SEARCH/i);

    expect(searchButton).toBeInTheDocument();
  });

});
