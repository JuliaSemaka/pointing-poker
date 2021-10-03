import React from 'react';
import { storiesOf } from '@storybook/react';
import { combineReducers, createStore } from 'redux';
import formReducer from 'redux-form/lib/reducer';
import { action } from '@storybook/addon-actions';

import { Game } from './Game';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { EGameStatus, ERoundStatus } from '../../components/Game/game.module';

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
  {
    id: '1',
    title: 'Issue 505',
    priority: 'Low',
    isChecked: true,
    link: 'http://drgerdssb',
    mark: '6',
  },
  {
    id: '2',
    title: 'Issue 745',
    priority: 'Middle',
    isChecked: false,
    link: 'http://drgerdssb',
    mark: null,
  },
  {
    id: '3',
    title: 'Issue 325',
    priority: 'Hight',
    isChecked: false,
    link: 'http://drgerdssb',
    mark: null,
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
const marksCurrentTask = [
  {
    idUser: '1',
    mark: '6',
    scoreType: 'sp',
  },
  {
    idUser: '2',
    mark: '12',
    scoreType: 'sp',
  },
  {
    idUser: '3',
    mark: 'uncnown',
    scoreType: null,
  },
];
const isTimerEnable = true;
const minute = '2';
const seconds = '0';
const countPercentTask = (number: string | null): string | undefined => {
  return;
};

const propsDealer = {
  myId: '1',
  dealerId: '1',
  isDealer: true,
  title,
  dealerData,
  handleGameStopGame: action('handleGameStopGame'),
  handleGameExit: action('handleGameExit'),
  handleRunRound: action('handleRunRound'),
  handleRestartRound: action('handleRestartRound'),
  handleNextIssye: action('handleNextIssye'),
  gameStatus: EGameStatus.created,
  issues,
  handleGameIssue: action('handleGameIssue'),
  handleTimeFinish: action('handleTimeFinish'),
  cardsValues: cardsValues,
  marksCurrentTask,
  members,
  isTimerEnable,
  minute,
  seconds,
  roundStatus: ERoundStatus.start,
  isPlayer: true,
  isTurnAuto: false,
  valueConfirmedUser: null,
  handleConfirmedUser: action('handleConfirmedUser'),
  countPercentTask,
  handleClickCard: action('handleClickCard'),
};

const propsDealerInProgress = {
  myId: '1',
  dealerId: '1',
  isDealer: true,
  title,
  dealerData,
  handleGameStopGame: action('handleGameStopGame'),
  handleGameExit: action('handleGameExit'),
  handleRunRound: action('handleRunRound'),
  handleRestartRound: action('handleRestartRound'),
  handleNextIssye: action('handleNextIssye'),
  gameStatus: EGameStatus.inProgress,
  issues,
  handleGameIssue: action('handleGameIssue'),
  handleTimeFinish: action('handleTimeFinish'),
  cardsValues: cardsValues,
  marksCurrentTask,
  members,
  isTimerEnable,
  minute,
  seconds,
  roundStatus: ERoundStatus.start,
  isPlayer: true,
  isTurnAuto: false,
  valueConfirmedUser: null,
  handleConfirmedUser: action('handleConfirmedUser'),
  countPercentTask,
  handleClickCard: action('handleClickCard'),
};

const propsPlayer = {
  myId: '1',
  dealerId: '1',
  isDealer: false,
  title,
  dealerData,
  handleGameStopGame: action('handleGameStopGame'),
  handleGameExit: action('handleGameExit'),
  handleRunRound: action('handleRunRound'),
  handleRestartRound: action('handleRestartRound'),
  handleNextIssye: action('handleNextIssye'),
  gameStatus: EGameStatus.created,
  issues,
  handleGameIssue: action('handleGameIssue'),
  handleTimeFinish: action('handleTimeFinish'),
  cardsValues: cardsValues,
  marksCurrentTask,
  members,
  isTimerEnable,
  minute,
  seconds,
  roundStatus: ERoundStatus.start,
  isPlayer: true,
  isTurnAuto: false,
  valueConfirmedUser: null,
  handleConfirmedUser: action('handleConfirmedUser'),
  countPercentTask,
  handleClickCard: action('handleClickCard'),
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
