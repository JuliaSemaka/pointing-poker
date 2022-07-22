import React from 'react';
import { render } from '@testing-library/react';
import { Avatar } from './Avatar';

test('show avatar initials', () => {
  const initials = 'IS';
  const { getByText } = render(
    <Avatar initials={initials} image={null} />,
  )
  expect(getByText(initials)).toBeInTheDocument()
});
