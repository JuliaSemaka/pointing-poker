import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'

describe('have image with logo alt text', () => {
  test('should render image', () => {
    const { getByAltText } = render(<Header />)
    getByAltText("logo"); 
  })
})
