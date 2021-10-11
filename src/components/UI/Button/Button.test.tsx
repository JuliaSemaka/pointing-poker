import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

test('show button text', () => {
  const text = 'Click button';
  const handleClick = () => {
    return;
  };
  const { getByText } = render(
    <Button text={text} handleClick={handleClick} />,
  )
  expect(getByText(text)).toBeInTheDocument()
});
