import React from 'react'
import { render } from '@testing-library/react'
import MainPage from './MainPage'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import formReducer from 'redux-form/lib/reducer'

const reducer = combineReducers({ form: formReducer })

describe('Main page', () => {
  test('should render main page', () => {
    const { getByText } = render(<Provider store={createStore(reducer)}><MainPage/></Provider>)
    expect(getByText(/Start your planning:/i)).toBeInTheDocument;
  })
})