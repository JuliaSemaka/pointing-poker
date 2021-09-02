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
  name: 'Name'
};
