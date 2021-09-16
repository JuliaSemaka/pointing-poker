import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import formReducer from 'redux-form/lib/reducer';
import { MemoryRouter } from 'react-router-dom';

import '../../../App.scss';
import { RenderField } from './RenderField';
import { ERenderFieldType, EType } from '../ui.module';
import { Field, reduxForm } from 'redux-form';

const reducer = combineReducers({ form: formReducer });
const propsText = {
  type: EType.text,
  style: ERenderFieldType.big,
  initialValues: {
    testName: 'Lala',
  },
  meta: {},
  disabled: false,
};
const propsTextDisabled = {
  type: EType.text,
  style: ERenderFieldType.withButton,
  initialValues: {
    testName: 'http://pockerplanning.chgjbhkj/rdbesrgw/dergw',
  },
  meta: {},
  disabled: true,
};
const propsFile = {
  type: EType.file,
  style: ERenderFieldType.withButton,
  initialValues: {
    testName: 'Choose file',
  },
  meta: {},
};
const propsTextWithButton = {
  type: EType.text,
  style: ERenderFieldType.withButton,
  initialValues: {
    testName: '',
  },
  meta: {},
};
const propsMiddle = {
  type: EType.text,
  style: ERenderFieldType.middle,
  initialValues: {
    testName: '',
  },
  meta: {},
};

const StoriesRenderField = (props: any) => {
  return (
    <Field
      name="testName"
      component={RenderField}
      label="testName"
      {...props}
    />
  );
};
const StoriesRenderField2 = reduxForm({
  form: 'formname',
})(StoriesRenderField);

storiesOf('UI Components/RenderField', module)
  .addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>)
  .add('InputTextBigWithDefaultValue', () => (
    <Provider store={createStore(reducer)}>
      <StoriesRenderField2 {...propsText} />
    </Provider>
  ))
  .add('InputTextWithButton', () => (
    <Provider store={createStore(reducer)}>
      <StoriesRenderField2 {...propsTextWithButton} />
    </Provider>
  ))
  .add('InputTextWithButtonDisabled', () => (
    <Provider store={createStore(reducer)}>
      <StoriesRenderField2 {...propsTextDisabled} />
    </Provider>
  ))
  .add('InputFile', () => (
    <Provider store={createStore(reducer)}>
      <StoriesRenderField2 {...propsFile} />
    </Provider>
  ))
  .add('InputMiddle', () => (
    <Provider store={createStore(reducer)}>
      <StoriesRenderField2 {...propsMiddle} />
    </Provider>
  ));
