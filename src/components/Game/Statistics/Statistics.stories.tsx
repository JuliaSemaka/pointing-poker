import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import formReducer from 'redux-form/lib/reducer';
import { MemoryRouter } from 'react-router-dom';

import '../../../App.scss';
import { Statistics } from './Statistics';

const reducer = combineReducers({ form: formReducer });

const countPercentTask = (number: string | null): string | undefined => {
  return;
};

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
  countPercentTask,
};

storiesOf('UI Components/Game-Statistics', module)
  .addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>)
  .add('StatisticsDefaultValue', () => (
    <Provider store={createStore(reducer)}>
      <Statistics {...propsDefault} />
    </Provider>
  ));
