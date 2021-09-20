import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import formReducer from 'redux-form/lib/reducer';
import { MemoryRouter } from 'react-router-dom';

import '../../App.scss';
import { CreateIssue } from './CreateIssueModal';

const reducer = combineReducers({ form: formReducer });

const TestCreateIssue: React.FC = () => {
  const [isOpened, setIsOpened] = useState(true);

  function changeIsState(value: boolean) {
    setIsOpened((state) => !state);
    console.log(`Пользователь сказал: ${value}`);
  }

  return <>{isOpened && <CreateIssue actionSubmit={changeIsState} />}</>;
};

storiesOf('CreateIssue', module)
  .addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>)
  .add('InputTextBigWithDefaultValue', () => (
    <Provider store={createStore(reducer)}>
      <TestCreateIssue />
    </Provider>
  ));
