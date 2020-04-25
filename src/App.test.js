import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Testing App Component', () => {
  test('Should render App component with any errors', () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  });
});
