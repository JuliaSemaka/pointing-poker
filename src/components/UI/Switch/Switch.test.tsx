import React from 'react'
import { render } from '@testing-library/react'
import Switch from './Switch'

test('show switchers label', () => {
  const label = 'Test Message'
  const check = true;
  const handleClick = () => {return};
  const { getByText } = render(
    <Switch isChecked={check} label={label} handleClick={handleClick} />,
  )

  expect(getByText(label)).toBeInTheDocument()
}) 