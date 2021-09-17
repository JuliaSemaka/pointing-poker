import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../App.scss';
import { KickPlayerModal } from './KickPlayerModal';

export default {
  title: 'KickPlayerModal',
  component: KickPlayerModal,
} as ComponentMeta<typeof KickPlayerModal>;

const Template: ComponentStory<typeof KickPlayerModal> = (args) => (
  <KickPlayerModal {...args} />
);

const actionKickButton = (value: boolean) => {
  console.log(`Пользователь сказал: ${value}`);
};

export const DefaultKickPlayerModal = Template.bind({});
DefaultKickPlayerModal.args = {
  playerName: 'Ivan',
  actionKickButton: actionKickButton,
};

export const KickPlayerModalTwoPeople = Template.bind({});
KickPlayerModalTwoPeople.args = {
  playerName: 'Ivan',
  authorKick: 'Julia',
  actionKickButton: actionKickButton,
};
