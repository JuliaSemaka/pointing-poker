import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import formReducer from 'redux-form/lib/reducer'
import { MemoryRouter } from 'react-router-dom'

import MainPage from './MainPage';

const reducer = combineReducers({ form: formReducer })

const props = {
  onSubmit: action('onSubmit'),
  handleStartGame: action('handleStartGame'),
  initialValues: {
    lobbyId: ''
  }
}
const props2 = {
  onSubmit: action('onSubmit'),
  handleStartGame: action('handleStartGame'),
  initialValues: {
    lobbyId: '12211234'
  }
}
const props3 = {
  onSubmit: action('onSubmit'),
  handleStartGame: action('handleStartGame'),
  initialValues: {
    lobbyId: '12weq211eqweq234'
  }
}
storiesOf('Pages/Main page', module)
  .addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>)
  .add('Main page unauthorized - Empty', () => (
    <Provider store={createStore(reducer)}>
      <MainPage {...props} />
    </Provider>
  ))
  .add('Main page unauthorized - Valid Id', () => (
    <Provider store={createStore(reducer)}>
      <MainPage {...props2} />
    </Provider>
  ))
  .add('Main page unauthorized - Invalid Id', () => (
    <Provider store={createStore(reducer)}>
      <MainPage {...props3} />
    </Provider>
  ))

