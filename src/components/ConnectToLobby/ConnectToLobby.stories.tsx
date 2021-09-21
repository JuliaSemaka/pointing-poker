import React, { useState } from 'react';
import ConnectToLobby  from './ConnectToLobby';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import formReducer from 'redux-form/lib/reducer'
import { MemoryRouter } from 'react-router-dom'

import testAvatar from '../../assets/images/test-avatar.jpg';

const reducer = combineReducers({ form: formReducer })

const props = { 
  onSubmit: action('onSubmit'),
  handleStartGame: action('handleStartGame'),
  handleUploadImage: action('handleUploadImage'),
  title: 'Connect to lobby',
  initialValues: {
    firstName: '',
    lastName: '',
    jobPosition: ''
  }
}

const propsWithName = {
  ...props,
  initialValues: {
    firstName: 'Iaroslav',
  }
}

const propsWithLastName = {
  ...props,
  initialValues: {
    firstName: 'Iaroslav',
    lastName: 'Silkin',
    jobPosition: ''
  }
}

const propsWithJob = {
  ...props,
  initialValues: {
    firstName: 'Iaroslav',
    lastName: 'Silkin',
    jobPosition: 'developer'
  }
}

const propsWithImage = {
  ...props,
  initialValues: {
    firstName: 'Iaroslav',
    lastName: 'Silkin',
    jobPosition: 'developer',
  },
  avatar: testAvatar
}

const ConnectToLobbyModal: React.FC<any> = (props) => {
  const [isOpened, setIsOpened] = useState(true);
  const [isCheck, setIsCheck] = useState(false);

  const handleClickSwitch = () => {
    setIsCheck((state) => !state);
  }

  const handleCloseModal = () => {
    setIsOpened((state) => !state);
  }

  return (
    <>
      {isOpened && (
        <ConnectToLobby {...props} handleCloseModal={handleCloseModal} handleClickSwitch={handleClickSwitch} />
      )}
    </>
  );
};

storiesOf('Modal/Connect to lobby', module)
  .addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>)
  .add('Modal Connect to lobby - Empty', () => (
    <div>
      <Provider store={createStore(reducer)}>
        <ConnectToLobbyModal {...props} />
      </Provider>
    </div>
  ))
  .add('Modal Connect to lobby - Fill Name', () => (
    <div>
      <Provider store={createStore(reducer)}>
        <ConnectToLobbyModal {...propsWithName} />
      </Provider>
    </div>
  ))
  .add('Modal Connect to lobby - Fill Last Name', () => (
    <div>
      <Provider store={createStore(reducer)}>
        <ConnectToLobbyModal {...propsWithLastName} />
      </Provider>
    </div>
  ))
  .add('Modal Connect to lobby - Fill Job Position', () => (
    <div>
      <Provider store={createStore(reducer)}>
        <ConnectToLobbyModal {...propsWithJob} />
      </Provider>
    </div>
  ))
  .add('Modal Connect to lobby - Fill All', () => (
    <div>
      <Provider store={createStore(reducer)}>
        <ConnectToLobbyModal {...propsWithImage} />
      </Provider>
    </div>
  ))
