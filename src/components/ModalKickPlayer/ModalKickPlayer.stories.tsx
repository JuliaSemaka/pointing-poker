import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../App.scss';
import { ModalKickPlayer } from './ModalKickPlayer';

export default {
  title: 'ModalKickPlayer',
  component: ModalKickPlayer,
} as ComponentMeta<typeof ModalKickPlayer>;

const Template: ComponentStory<typeof ModalKickPlayer> = (args) => (
  <ModalKickPlayer {...args} />
);

const actionKickButton = (value: boolean) => {
  console.log(`Пользователь сказал: ${value}`);
};

export const DefaultModalKickPlayer = Template.bind({});
DefaultModalKickPlayer.args = {
  playerName: 'Ivan',
  actionKickButton: actionKickButton,
};

export const ModalKickPlayerTwoPeople = Template.bind({});
ModalKickPlayerTwoPeople.args = {
  playerName: 'Ivan',
  authorKick: 'Julia',
  actionKickButton: actionKickButton,
};
