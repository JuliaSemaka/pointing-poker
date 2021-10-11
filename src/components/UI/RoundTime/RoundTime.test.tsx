import React from 'react';
import { render } from '@testing-library/react';
import { RoundTime } from './RoundTime';

test('show timer', () => {
  const text = 'minutes';
  const { getByText } = render(
    <RoundTime minute={null} seconds={null} />,
  )
  expect(getByText(text)).toBeInTheDocument()
});
