import React from 'react';
import { ComponentStory, ComponentMeta, storiesOf } from '@storybook/react';
import { combineReducers, createStore } from 'redux';
import formReducer from 'redux-form/lib/reducer';

import { Lobby } from './Lobby';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const reducer = combineReducers({ form: formReducer });

const handleSubmit = () => {
  const a = 1;
};

storiesOf('Pages/Lobby', module)
  .addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>)
  .add('Lobby dealer', () => (
    <>
      <Provider store={createStore(reducer)}>
        <Lobby handleSubmit={handleSubmit} />
      </Provider>
    </>
  ))
  .add('Lobby player', () => (
    <>
      <Provider store={createStore(reducer)}>
        <Lobby isDealer={false} handleSubmit={handleSubmit} />
      </Provider>
    </>
  ));
