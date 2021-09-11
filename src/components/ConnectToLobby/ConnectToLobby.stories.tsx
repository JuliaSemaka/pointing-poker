import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
<<<<<<< HEAD
import ConnectToLobby  from './ConnectToLobby';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import formReducer from 'redux-form/lib/reducer'
import { MemoryRouter } from 'react-router-dom'


const reducer = combineReducers({ form: formReducer })

const reducerWithFormError = combineReducers({
  form: () => ({ otpEmail: { error: 'Error message' } }),
})

const props = {
  lable: 'Connect ToLobby'
  // onSubmit: action('onSubmit'),
}

storiesOf('Modal/Connect to lobby', module)
  .addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>)
  .add('Modal Connect to lobby - Empty', () => (
    <div>
      <Provider store={createStore(reducer)}>
        <ConnectToLobby {...props} />
      </Provider>
    </div>
  ))
  .add('Modal Connect to lobby - Fill Name', () => (
    <div>
      <Provider store={createStore(reducer)}>
        <ConnectToLobby {...props} />
      </Provider>
    </div>
  ))
  .add('Modal Connect to lobby - Fill Last Name', () => (
    <div>
      <Provider store={createStore(reducer)}>
        <ConnectToLobby {...props} />
      </Provider>
    </div>
  ))
  .add('Modal Connect to lobby - Fill Job Position', () => (
    <div>
      <Provider store={createStore(reducerWithFormError)}>
        <ConnectToLobby {...props} />
      </Provider>
    </div>
  ))
  .add('Modal Connect to lobby - Fill All', () => (
    <div>
      <Provider store={createStore(reducerWithFormError)}>
        <ConnectToLobby {...props} />
      </Provider>
    </div>
  ))
=======
import { ConnectToLobby } from './ConnectToLobby';

export default {
  title: 'ConnectToLobby',
  component: ConnectToLobby,
} as ComponentMeta<typeof ConnectToLobby>;

const Template: ComponentStory<typeof ConnectToLobby> = (args) => <ConnectToLobby {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  label: 'Connect To Lobby',
  name: '',
  lastName: '',
  jobPosition: '',
  defaultNameForImage: 'Name',
};

export const FillName = Template.bind({});
FillName.args = {
  label: 'Connect To Lobby',
  name: 'Name',
  lastName: '',
  jobPosition: '',
  defaultNameForImage: 'Name',
};

export const FillLastName = Template.bind({});
FillLastName.args = {
  label: 'Connect To Lobby',
  name: '',
  lastName: 'Last name',
  jobPosition: '',
  defaultNameForImage: 'Name',
};

export const FillJobPosition = Template.bind({});
FillJobPosition.args = {
  label: 'Connect To Lobby',
  name: '',
  lastName: '',
  jobPosition: 'Job Position',
  defaultNameForImage: 'Name',
};

export const FillAll = Template.bind({});
FillAll.args = {
  label: 'Connect To Lobby',
  name: 'Name',
  lastName: 'Last name',
  jobPosition: 'Job Position',
  defaultNameForImage: 'Name',
};
>>>>>>> 14a9525647afe9fac0b66a7888adcbcce7605618
