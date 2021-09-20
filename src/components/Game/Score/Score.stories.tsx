import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import formReducer from 'redux-form/lib/reducer';
import { MemoryRouter } from 'react-router-dom';

import '../../../App.scss';
import { Score } from './Score';

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
    mark: '6',
    scoreType: 'sp',
  },
];

const reducer = combineReducers({ form: formReducer });

const propsDefault = {
  members,
  marksCurrentTask,
};

storiesOf('UI Components/Score', module)
  .addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>)
  .add('InputTextBigWithDefaultValue', () => (
    <Provider store={createStore(reducer)}>
      <Score {...propsDefault} />
    </Provider>
  ));
