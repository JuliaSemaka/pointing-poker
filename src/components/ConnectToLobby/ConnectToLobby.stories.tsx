import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ConnectToLobby  from './ConnectToLobby';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import formReducer from 'redux-form/lib/reducer'
import { MemoryRouter } from 'react-router-dom'


const reducer = combineReducers({ form: formReducer })

const reducerWithFormError = combineReducers({
  form: () => ({ otpEmail: { error: 'Error message' } }),
})

const props = {
  lable: 'Connect ToLobby'
  // onSubmit: action('onSubmit'),
}

storiesOf('Modal/Connect to lobby', module)
  .addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>)
  .add('Modal Connect to lobby - Empty', () => (
    <div>
      <Provider store={createStore(reducer)}>
        <ConnectToLobby />
      </Provider>
    </div>
  ))
  .add('Modal Connect to lobby - Fill Name', () => (
    <div>
      <Provider store={createStore(reducer)}>
        <ConnectToLobby />
      </Provider>
    </div>
  ))
  .add('Modal Connect to lobby - Fill Last Name', () => (
    <div>
      <Provider store={createStore(reducer)}>
        <ConnectToLobby />
      </Provider>
    </div>
  ))
  .add('Modal Connect to lobby - Fill Job Position', () => (
    <div>
      <Provider store={createStore(reducerWithFormError)}>
        <ConnectToLobby />
      </Provider>
    </div>
  ))
  .add('Modal Connect to lobby - Fill All', () => (
    <div>
      <Provider store={createStore(reducerWithFormError)}>
        <ConnectToLobby />
      </Provider>
    </div>
  ))
