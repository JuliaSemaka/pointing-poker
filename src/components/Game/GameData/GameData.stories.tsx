import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import formReducer from 'redux-form/lib/reducer';
import { MemoryRouter } from 'react-router-dom';

import '../../../App.scss';
import { GameDataGame } from './GameData';
import { action } from '@storybook/addon-actions';
import { ERoundStatus } from '../game.module';

const title = 'Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)';
const dealerData = {
  id: '1',
  firstName: 'Julia',
  lastName: 'Yatsko',
  jobTitle: 'web developer',
  image: null,
  role: 'dealer',
};

const reducer = combineReducers({ form: formReducer });

const propsDefault = {
  myId: '1',
  isDealer: true,
  title,
  dealerData,
  handleGameStopGame: action('handleGameStopGame'),
  handleGameExit: action('handleGameExit'),
  handleTimeFinish: action('handleTimeFinish'),
  roundStatus: ERoundStatus.start,
};

storiesOf('UI Components/Game-GameData', module)
  .addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>)
  .add('InputTextBigWithDefaultValue', () => (
    <Provider store={createStore(reducer)}>
      <GameDataGame {...propsDefault} />
    </Provider>
  ));
