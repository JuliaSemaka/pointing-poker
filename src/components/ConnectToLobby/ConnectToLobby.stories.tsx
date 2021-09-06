import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
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