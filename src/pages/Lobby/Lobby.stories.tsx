import React from 'react';
import { ComponentStory, ComponentMeta, storiesOf } from '@storybook/react';
import { combineReducers, createStore } from 'redux';
import formReducer from 'redux-form/lib/reducer';

import { Lobby } from './Lobby';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const reducer = combineReducers({ form: formReducer });

storiesOf('Pages/Lobby', module)
  .addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>)
  .add('Lobby default', () => (
    <>
      <Provider store={createStore(reducer)}>
        <Lobby />
      </Provider>
    </>
  ));
