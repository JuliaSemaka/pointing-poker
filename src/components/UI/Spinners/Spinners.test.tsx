import React from 'react';
import { render } from '@testing-library/react';
import { Spinners } from './Spinners';

test('show spinner text', () => {
  const text = 'Loading...';
  const { getByText } = render(
    <Spinners />,
  )
  expect(getByText(text)).toBeInTheDocument()
});
