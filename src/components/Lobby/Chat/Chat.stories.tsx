import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import formReducer from 'redux-form/lib/reducer';
import { MemoryRouter } from 'react-router-dom';

import '../../../App.scss';
import { Chat } from './Chat';
import { action } from '@storybook/addon-actions';

const chatMessage = [
  {
    idUser: '1',
    userData: {
      id: '1',
      firstName: 'Julia',
      lastName: 'Yatsko',
      jobTitle: 'web developer',
      image: null,
      role: 'gamer',
    },
    message: 'Hello',
  },
  {
    idUser: '3',
    userData: {
      id: '3',
      firstName: 'Ivan',
      lastName: 'Yatsko',
      jobTitle: 'junior developer',
      image: null,
      role: 'gamer',
    },
    message: 'Nor again is there anyone who loves',
  },
  {
    idUser: '1',
    userData: {
      id: '1',
      firstName: 'Julia',
      lastName: 'Yatsko',
      jobTitle: 'web developer',
      image: null,
      role: 'gamer',
    },
    message: 'Hello',
  },
  {
    idUser: '3',
    userData: {
      id: '3',
      firstName: 'Ivan',
      lastName: 'Yatsko',
      jobTitle: 'junior developer',
      image: null,
      role: 'gamer',
    },
    message: 'Nor again is there anyone who loves',
  },
  {
    idUser: '1',
    userData: {
      id: '1',
      firstName: 'Julia',
      lastName: 'Yatsko',
      jobTitle: 'web developer',
      image: null,
      role: 'gamer',
    },
    message:
      'But I must explain to you how all this mistaken idea of denouncing pleasure',
  },
  {
    idUser: '3',
    userData: {
      id: '3',
      firstName: 'Ivan',
      lastName: 'Yatsko',
      jobTitle: 'junior developer',
      image: null,
      role: 'gamer',
    },
    message: 'Parsing error: Property assignment expected',
  },
];
const members = [
  {
    id: '1',
    firstName: 'Julia',
    lastName: 'Yatsko',
    jobTitle: 'web developer',
    image: null,
    role: 'dealer',
  },
  {
    id: '3',
    firstName: 'Ivan',
    lastName: 'Yatsko',
    jobTitle: 'junior developer',
    image: null,
    role: 'gamer',
  },
  {
    id: '4',
    firstName: 'Alex',
    lastName: 'Radchenko',
    jobTitle: 'lead',
    image: null,
    role: 'gamer',
  },
  {
    id: '3',
    firstName: 'Sasha',
    lastName: 'Bolshakov',
    jobTitle: 'project manager',
    image: null,
    role: 'gamer',
  },
];

const reducer = combineReducers({ form: formReducer });

const propsDefault = {
  myId: '1',
  dealerId: '1',
  handleSubmit: action('handleSubmit'),
  chatMessage,
  members,
  handleRemoveMember: action('handleRemoveMember'),
};

storiesOf('UI Components/Lobby-Chat', module)
  .addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>)
  .add('InputTextBigWithDefaultValue', () => (
    <Provider store={createStore(reducer)}>
      <Chat {...propsDefault} />
    </Provider>
  ));
