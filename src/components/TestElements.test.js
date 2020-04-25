import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TestElements from './TestElements';

// afterEach(cleanup);

describe('Test Counter functionality', () => {
  it('should equal to 0', () => {
    const { getByTestId } = render(<TestElements />);
    const counter = getByTestId('counter');
    expect(counter).toHaveTextContent(0);
  });
});
