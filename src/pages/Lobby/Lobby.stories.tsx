import React from 'react';
import { storiesOf } from '@storybook/react';
import { combineReducers, createStore } from 'redux';
import formReducer from 'redux-form/lib/reducer';
import { action } from '@storybook/addon-actions';

import { Lobby } from './Lobby';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const reducer = combineReducers({ form: formReducer });

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
const title = 'Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)';
const dealerData = {
  id: '1',
  firstName: 'Julia',
  lastName: 'Yatsko',
  jobTitle: 'web developer',
  image: null,
  role: 'dealer',
};
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
const cardsValues = [
  {
    scoreType: null,
    number: null,
  },
  {
    scoreType: 'sp',
    number: '12',
  },
  {
    scoreType: 'sp',
    number: '6',
  },
  {
    scoreType: 'sp',
    number: '2',
  },
];
const issues = [
  {
    id: '1',
    title: 'Issue 505',
    priority: 'Low',
    link: 'http://drbredbrd',
    isChecked: false,
    mark: null,
  },
  {
    id: '2',
    title: 'Issue 745',
    priority: 'Middle',
    link: 'http://drbredbrd',
    isChecked: false,
    mark: null,
  },
  {
    id: '3',
    title: 'Issue 325',
    priority: 'Hight',
    link: 'http://drbredbrd',
    isChecked: false,
    mark: null,
  },
];
const myId = '1';
const dillerId = '1';
const initialValuesCopy = { copyId: '123' };

const propsDealer = {
  myId,
  dillerId,
  members,
  sendMessageChat: action('sendMessageChat'),
  chatMessage,
  isDealer: true,
  title,
  dealerData,
  handleEditTitle: action('handleEditTitle'),
  handleCopy: action('handleCopy'),
  handleStartGame: action('handleStartGame'),
  handleCancelGame: action('handleCancelGame'),
  handleExit: action('handleExit'),
  cardsValues,
  handleAddCard: action('handleAddCard'),
  handleEditCard: action('handleEditCard'),
  issues,
  handleIssue: action('handleIssue'),
  handleRemoveMember: action('handleRemoveMember'),
  handleSubmitGameSettings: action('handleSubmitGameSettings'),
  handleChangeMinute: action('handleChangeMinute'),
  handleChangeSeconds: action('handleChangeSeconds'),
  initialValuesCopy,
};

const propsDealerEmptyChat = {
  myId,
  dillerId,
  members: [],
  sendMessageChat: action('sendMessageChat'),
  chatMessage: [],
  isDealer: true,
  title,
  dealerData,
  handleEditTitle: action('handleEditTitle'),
  handleCopy: action('handleCopy'),
  handleStartGame: action('handleStartGame'),
  handleCancelGame: action('handleCancelGame'),
  handleExit: action('handleExit'),
  cardsValues: [],
  handleAddCard: action('handleAddCard'),
  handleEditCard: action('handleEditCard'),
  issues: [],
  handleIssue: action('handleIssue'),
  handleRemoveMember: action('handleRemoveMember'),
  handleSubmitGameSettings: action('handleSubmitGameSettings'),
  handleChangeMinute: action('handleChangeMinute'),
  handleChangeSeconds: action('handleChangeSeconds'),
  initialValuesCopy,
};

const propsPlayer = {
  myId,
  dillerId,
  members,
  sendMessageChat: action('sendMessageChat'),
  chatMessage: [],
  isDealer: true,
  title,
  dealerData,
  handleEditTitle: action('handleEditTitle'),
  handleCopy: action('handleCopy'),
  handleStartGame: action('handleStartGame'),
  handleCancelGame: action('handleCancelGame'),
  handleExit: action('handleExit'),
  cardsValues,
  handleAddCard: action('handleAddCard'),
  handleEditCard: action('handleEditCard'),
  issues,
  handleIssue: action('handleIssue'),
  handleRemoveMember: action('handleRemoveMember'),
  handleSubmitGameSettings: action('handleSubmitGameSettings'),
  handleChangeMinute: action('handleChangeMinute'),
  handleChangeSeconds: action('handleChangeSeconds'),
  initialValuesCopy,
};

storiesOf('Pages/Lobby', module)
  .addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>)
  .add('Lobby dealer', () => (
    <Provider store={createStore(reducer)}>
      <Lobby {...propsDealer} />
    </Provider>
  ))
  .add('Lobby dealer empty chat', () => (
    <Provider store={createStore(reducer)}>
      <Lobby {...propsDealerEmptyChat} />
    </Provider>
  ))
  .add('Lobby player', () => (
    <Provider store={createStore(reducer)}>
      <Lobby {...propsPlayer} />
    </Provider>
  ));
