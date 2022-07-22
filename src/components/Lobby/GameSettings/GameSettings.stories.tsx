import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import formReducer from 'redux-form/lib/reducer';
import { MemoryRouter } from 'react-router-dom';

import '../../../App.scss';
import { GameSettings } from './GameSettings';
import { action } from '@storybook/addon-actions';

const [isTimerEnableState, setIsTimerEnable] = useState(true);

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

const roundTime = {
  minute: '1',
  seconds: '1',
};

const reducer = combineReducers({ form: formReducer });

const propsDefault = {
  handleAddCard: action('handleAddCard'),
  handleEditCard: action('handleEditCard'),
  handleDeleteCard: action('handleDeleteCard'),
  cardsValues,
  handleSubmitGameSettings: action('handleSubmitGameSettings'),
  handleChangeMinute: action('handleChangeMinute'),
  handleChangeSeconds: action('handleChangeSeconds'),
  roundTime,
  isTimerEnableState,
  setIsTimerEnable,
  successSettings: false,
};

storiesOf('UI Components/Lobby-GameSettings', module)
  .addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>)
  .add('InputTextBigWithDefaultValue', () => (
    <Provider store={createStore(reducer)}>
      <GameSettings {...propsDefault} />
    </Provider>
  ));
