import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { createStore, combineReducers } from 'redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Provider } from 'react-redux';
import formReducer from 'redux-form/lib/reducer';
import { MemoryRouter } from 'react-router-dom';
import Switch from './Switch';

interface SwitchWrapper {
  label: string,
  isChecked: boolean
}
const propsToggleOff = {
  isChecked: false,
  label: 'Switcher:',
};

const propsToggleOn = {
  isChecked: true,
  label: 'Switcher:',
};

const reducer = combineReducers({ form: formReducer });

const SwitchWrapper: React.FC<
SwitchWrapper & InjectedFormProps<any, SwitchWrapper>
> = ({label, isChecked}) => {
  const [isCheck, setIsCheck] = useState(isChecked);
  return <Field
    name="switcher"
    component={Switch}
    handleClick={setIsCheck}
    label={label}
    isChecked={isCheck}
  />
}
const StoriesSwitch = reduxForm<any, SwitchWrapper>({
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