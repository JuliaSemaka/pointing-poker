import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import formReducer from 'redux-form/lib/reducer';
import { MemoryRouter } from 'react-router-dom';

import '../../App.scss';
import { CreateIssue } from './CreateIssueModal';

const reducer = combineReducers({ form: formReducer });

const TestCreateIssue: React.FC<any> = (props) => {
  const [isOpened, setIsOpened] = useState(true);

  const handleCloseModal = () => {
    setIsOpened((state) => !state);
  }

  const handleSubmit = (event: any) => {
    console.log('Форма отправлена')
  }

  return <>{isOpened && <CreateIssue handleCloseModal={handleCloseModal} onSubmit={handleSubmit} />}</>;
};

storiesOf('CreateIssue', module)
  .addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>)
  .add('InputTextBigWithDefaultValue', () => (
    <Provider store={createStore(reducer)}>
      <TestCreateIssue />
    </Provider>
  ));
