import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import TestElements from './TestElements';

// afterEach(cleanup);

describe('Test Counter functionality', () => {
  it('should equal to 0', () => {
    const { getByTestId } = render(<TestElements />);
    const counter = getByTestId('counter');
    expect(counter).toHaveTextContent(0);
  });

  it('should increment by 1', () => {
    const { getByTestId } = render(<TestElements />);
    const buttonUp = getByTestId('button-up');
    fireEvent.click(buttonUp);
    const counter = getByTestId('counter');
    expect(counter).toHaveTextContent(1);
  });

  it('should decrement by 1', () => {
    const { getByTestId } = render(<TestElements />);
    const buttonDown = getByTestId('button-down');
    fireEvent.click(buttonDown);
    const counter = getByTestId('counter');
    expect(counter).toHaveTextContent(0);
  });
});
