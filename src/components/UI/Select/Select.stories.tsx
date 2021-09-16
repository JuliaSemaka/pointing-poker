import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import formReducer from 'redux-form/lib/reducer';
import { MemoryRouter } from 'react-router-dom';

import '../../../App.scss';
import { Select } from './Select';
import { reduxForm } from 'redux-form';

const reducer = combineReducers({ form: formReducer });

const propsDefaultOne = {
  options: ['one', 'two', 'three'],
  name: 'myName',
  initialValues: {
    myName: 'one',
  },
};
const propsDefaultValueThree = {
  options: ['one', 'two', 'three'],
  name: 'myName',
  initialValues: {
    myName: 'three',
  },
};

const StoriesSelect = (props: any) => {
  return <Select {...props} />;
};
const StoriesSelectFinish = reduxForm({
  form: 'formname',
})(StoriesSelect);

storiesOf('UI Components/Select', module)
  .addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>)
  .add('Select default value one', () => (
    <Provider store={createStore(reducer)}>
      <StoriesSelectFinish {...propsDefaultOne} />
    </Provider>
  ))
  .add('Select default value three', () => (
    <Provider store={createStore(reducer)}>
      <StoriesSelectFinish {...propsDefaultValueThree} />
    </Provider>
  ));
