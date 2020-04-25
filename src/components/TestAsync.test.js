import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import TestAsync from './TestAsync';

test('Should test async increment', async () => {
  const { getByTestId, getByText, debug } = render(<TestAsync />);
  const buttonUp = getByTestId('button-up');
  fireEvent.click(buttonUp);

  const counter = await waitForElement(() => getByText('1'));
  expect(counter).toHaveTextContent('1');
});
