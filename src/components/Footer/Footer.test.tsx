import React from 'react'
import { render } from '@testing-library/react'
import Footer from './Footer'

describe('have image with logo alt text', () => {
  test('should render image', () => {
    const { getByAltText } = render(<Footer />)
    getByAltText("Logo"); 
  })
})
