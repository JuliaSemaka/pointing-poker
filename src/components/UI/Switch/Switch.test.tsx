import React from 'react'
import { render } from '@testing-library/react'
import Switch from './Switch'

test('show switchers label', () => {
  const label = 'Test Message'
  const check = true;
  const handleClick = () => console.log(true);
  const { getByText } = render(
    <Switch check={check} label={label} handleClick={handleClick} />,
  )

  expect(getByText(label)).toBeInTheDocument()
})