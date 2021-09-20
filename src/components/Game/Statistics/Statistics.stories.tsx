import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import formReducer from 'redux-form/lib/reducer';
import { MemoryRouter } from 'react-router-dom';

import '../../../App.scss';
import { Statistics } from './Statistics';

const reducer = combineReducers({ form: formReducer });

const propsDefault = {
  cardsValues: [
    {
      scoreType: 'sp',
      number: '6',
    },
    {
      scoreType: 'sp',
      number: '12',
    },
  ],
  marksCurrentTask: [
    {
      idUser: '1',
      mark: '12',
      scoreType: 'sp',
    },
  ],
};

storiesOf('UI Components/Game-Statistics', module)
  .addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>)
  .add('InputTextBigWithDefaultValue', () => (
    <Provider store={createStore(reducer)}>
      <Statistics {...propsDefault} />
    </Provider>
  ));
