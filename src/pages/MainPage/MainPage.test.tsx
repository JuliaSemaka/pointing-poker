import React from 'react'
import { render } from '@testing-library/react'
import MainPage from './MainPage'

describe('', () => {
  test('should render modal window Connect to lobby', () => {
    const { getByText } = render(<MainPage title="Connect To Lobby"/>)
    expect(getByText(/Start your planning:/i)).toBeInTheDocument;
  })
})