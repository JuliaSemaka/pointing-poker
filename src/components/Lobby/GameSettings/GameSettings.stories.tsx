import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import formReducer from 'redux-form/lib/reducer';
import { MemoryRouter } from 'react-router-dom';

import '../../../App.scss';
import { GameSettings } from './GameSettings';
import { action } from '@storybook/addon-actions';

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

const reducer = combineReducers({ form: formReducer });

const propsDefault = {
  handleAddCard: action('handleAddCard'),
  handleEditCard: action('handleEditCard'),
  cardsValues,
  handleSubmitGameSettings: action('handleSubmitGameSettings'),
  handleChangeMinute: action('handleChangeMinute'),
  handleChangeSeconds: action('handleChangeSeconds'),
};

storiesOf('UI Components/Lobby-GameSettings', module)
  .addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>)
  .add('InputTextBigWithDefaultValue', () => (
    <Provider store={createStore(reducer)}>
      <GameSettings {...propsDefault} />
    </Provider>
  ));
