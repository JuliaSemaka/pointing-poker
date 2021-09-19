import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { createStore, combineReducers } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { Provider } from 'react-redux';
import formReducer from 'redux-form/lib/reducer';
import { MemoryRouter } from 'react-router-dom';
import Switch from './Switch';

const propsToggleOff = {
  isChecked: false,
  label: 'Switcher:',
};

const propsToggleOn = {
  isChecked: true,
  label: 'Switcher:',
};

const reducer = combineReducers({ form: formReducer });

const SwitchWrapper = ({label, isChecked}: any) => {
  const [isCheck, setIsCheck] = useState(isChecked);
  return <Field
    name="switcher"
    component={Switch}
    handleClick={setIsCheck}
    label={label}
    isChecked={isCheck}
  />
}
const StoriesSwitch: any = reduxForm({
  form: 'formname',
})(SwitchWrapper);

storiesOf('UI Components/Switch', module)
  .addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>)
  .add('ToggleOff', () => (
    <Provider store={createStore(reducer)}>
      <StoriesSwitch {...propsToggleOff} />
    </Provider>
  ))
  .add('ToggleOn', () => (
    <Provider store={createStore(reducer)}>
      <StoriesSwitch {...propsToggleOn} />
    </Provider>
  ));