import React from 'react';
import { storiesOf } from '@storybook/react';
import { combineReducers, createStore } from 'redux';
import formReducer from 'redux-form/lib/reducer';
import { action } from '@storybook/addon-actions';

import { Game } from './Game';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { EGameStatus } from '../../components/Game/game.module';

const reducer = combineReducers({ form: formReducer });

const title = 'Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)';
const dealerData = {
  id: '1',
  firstName: 'Julia',
  lastName: 'Yatsko',
  jobTitle: 'web developer',
  image: null,
  role: 'dealer',
};
const issues = [
  { title: 'Issue 505', priority: 'Low', isChecked: true },
  { title: 'Issue 745', priority: 'Middle', isChecked: false },
  { title: 'Issue 325', priority: 'Hight', isChecked: false },
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

const propsDealer = {
  isDealer: true,
  title,
  dealerData,
  handleStopGame: action('handleStopGame'),
  handleRunRound: action('handleRunRound'),
  gameStatus: EGameStatus.created,
  issues,
  handleGameIssue: action('handleGameIssue'),
  cardsValues: cardsValues,
};

const propsDealerInProgress = {
  isDealer: true,
  title,
  dealerData,
  handleStopGame: action('handleStopGame'),
  handleRunRound: action('handleRunRound'),
  gameStatus: EGameStatus.inProgress,
  issues,
  handleGameIssue: action('handleGameIssue'),
  cardsValues: cardsValues,
};

const propsPlayer = {
  isDealer: false,
  title,
  dealerData,
  handleStopGame: action('handleStopGame'),
  handleRunRound: action('handleRunRound'),
  gameStatus: EGameStatus.created,
  issues,
  handleGameIssue: action('handleGameIssue'),
  cardsValues: cardsValues,
};

storiesOf('Pages/Game', module)
  .addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>)
  .add('Game dealer', () => (
    <Provider store={createStore(reducer)}>
      <Game {...propsDealer} />
    </Provider>
  ))
  .add('Game dealer in progress', () => (
    <Provider store={createStore(reducer)}>
      <Game {...propsDealerInProgress} />
    </Provider>
  ))
  .add('Game player', () => (
    <Provider store={createStore(reducer)}>
      <Game {...propsPlayer} />
    </Provider>
  ));
