import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import formReducer from 'redux-form/lib/reducer';
import { MemoryRouter } from 'react-router-dom';

import '../../../App.scss';
import { RenderField } from './RenderField';
import { ERenderFieldType, EType } from '../ui.module';

const reducer = combineReducers({ form: formReducer });
const propsText = {
  type: EType.text,
  style: ERenderFieldType.big,
  initialValues: {
    name1: 'Lala',
  },
  meta: {},
  disabled: false,
};
const propsTextDisabled = {
  type: EType.text,
  style: ERenderFieldType.withButton,
  initialValues: {
    name1: 'http://pockerplanning.chgjbhkj/rdbesrgw/dergw',
  },
  meta: {},
  disabled: true,
};
const propsFile = {
  type: EType.file,
  style: ERenderFieldType.withButton,
  initialValues: {
    name1: 'Choose file',
  },
  meta: {},
};
const propsTextWithButton = {
  type: EType.text,
  style: ERenderFieldType.withButton,
  initialValues: {
    name1: '',
  },
  meta: {},
};
const propsMiddle = {
  type: EType.text,
  style: ERenderFieldType.middle,
  initialValues: {
    name1: '',
  },
  meta: {},
};

storiesOf('UI/RenderField', module)
  .addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>)
  .add('InputTextBigWithDefaultValue', () => (
    <>
      <Provider store={createStore(reducer)}>
        <RenderField {...propsText} />
      </Provider>
    </>
  ))
  .add('InputTextWithButton', () => (
    <>
      <Provider store={createStore(reducer)}>
        <RenderField {...propsTextWithButton} />
      </Provider>
    </>
  ))
  .add('InputTextWithButtonDisabled', () => (
    <>
      <Provider store={createStore(reducer)}>
        <RenderField {...propsTextDisabled} />
      </Provider>
    </>
  ))
  .add('InputFile', () => (
    <>
      <Provider store={createStore(reducer)}>
        <RenderField {...propsFile} />
      </Provider>
    </>
  ))
  .add('InputMiddle', () => (
    <>
      <Provider store={createStore(reducer)}>
        <RenderField {...propsMiddle} />
      </Provider>
    </>
  ));
