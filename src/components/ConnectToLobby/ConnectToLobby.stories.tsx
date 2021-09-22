import React, { useState } from 'react'
import ConnectToLobby from './ConnectToLobby'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import formReducer from 'redux-form/lib/reducer'
import { MemoryRouter } from 'react-router-dom'

import '../../App.scss'

const reducer = combineReducers({ form: formReducer })

const props = {
  onSubmit: action('onSubmit'),
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
  defaultAvatar: '../images/avatar.jpg'
}

const ConnectToLobbyModal: React.FC<any> = (props) => {
  const { defaultAvatar } = props;
  const [isOpened, setIsOpened] = useState(true);
  const [isObserver, setIsObserver] = useState(false);
  const [avatar, setAvatar] = useState(defaultAvatar);

  const handleClickSwitch = () => {
    setIsObserver((state) => !state);
  }

  const handleCloseModal = () => {
    setIsOpened((state) => !state);
  }

  const uploadFile = (
    file: File,
    setValueState: React.Dispatch<React.SetStateAction<string>>
  ): void => {
    const reader: FileReader = new FileReader();
    reader.onload = () => {
      const res = reader.result as string;
      setValueState(res);
    };
    reader.readAsDataURL(file);
  }

  const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file: File = (event.target.files as FileList)[0];
    uploadFile(file, setAvatar);
  }

  return (
    <>
      {isOpened && (
        <ConnectToLobby
          {...props}
          handleCloseModal={handleCloseModal}
          handleClickSwitch={handleClickSwitch}
          handleUploadImage={handleUploadImage}
          avatar={avatar}
        />
      )}
    </>
  );
};

storiesOf('Modal/Connect to lobby', module)
  .addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>)
  .add('Modal Connect to lobby - Empty', () => (
    <Provider store={createStore(reducer)}>
      <ConnectToLobbyModal {...props} />
    </Provider>
  ))
  .add('Modal Connect to lobby - Fill Name', () => (
    <Provider store={createStore(reducer)}>
      <ConnectToLobbyModal {...propsWithName} />
    </Provider>
  ))
  .add('Modal Connect to lobby - Fill Last Name', () => (
    <Provider store={createStore(reducer)}>
      <ConnectToLobbyModal {...propsWithLastName} />
    </Provider>
  ))
  .add('Modal Connect to lobby - Fill Job Position', () => (
    <Provider store={createStore(reducer)}>
      <ConnectToLobbyModal {...propsWithJob} />
    </Provider>
  ))
  .add('Modal Connect to lobby - Fill All', () => (
    <Provider store={createStore(reducer)}>
      <ConnectToLobbyModal {...propsWithImage} />
    </Provider>
  ))
