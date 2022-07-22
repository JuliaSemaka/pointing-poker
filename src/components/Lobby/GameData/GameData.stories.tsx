import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import formReducer from 'redux-form/lib/reducer';
import { MemoryRouter } from 'react-router-dom';

import '../../../App.scss';
import { GameData } from './GameData';
import { action } from '@storybook/addon-actions';

const title = 'Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)';
const dealerData = {
  id: '1',
  firstName: 'Julia',
  lastName: 'Yatsko',
  jobTitle: 'web developer',
  image: null,
  role: 'dealer',
};
const initialValuesCopy = { copyId: '1' };

const reducer = combineReducers({ form: formReducer });

const propsDefault = {
  isDealer: true,
  title,
  dealerData,
  editTitle: false,
  setEditTitle: action('setEditTitle'),
  handleEditTitle: action('handleEditTitle'),
  handleStartGame: action('handleStartGame'),
  handleCancelGame: action('handleCancelGame'),
  handleExit: action('handleExit'),
  initialValues: initialValuesCopy,
};

storiesOf('UI Components/Lobby-GameData', module)
  .addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>)
  .add('InputTextBigWithDefaultValue', () => (
    <Provider store={createStore(reducer)}>
      <GameData {...propsDefault} />
    </Provider>
  ));
