import { render, fireEvent } from '@testing-library/react-native';

import '@testing-library/react-native/extend-expect';

import axios from 'axios';

import React from 'react';

import App from '../App';

jest.mock('axios');

describe('<App />', () => {
  test('UI responds after API success', async () => {
    axios.get = jest.fn().mockResolvedValueOnce({ data: { base_experience: 101 } });
    const { getByTestId, findByTestId } = render(<App />);

    fireEvent.press(getByTestId('test-button'));

    const messageResult = await findByTestId('test-message');

    expect(messageResult).toHaveTextContent('101');
  });

  test('UI responds after API Failure', async () => {
    axios.get = jest.fn().mockRejectedValueOnce({});
    const { getByTestId, findByTestId } = render(<App />);

    fireEvent.press(getByTestId('test-button'));

    const messageResult = await findByTestId('test-message');

    expect(messageResult).toHaveTextContent('999');
  });
});
