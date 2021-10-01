import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../App.scss';
import { ConfirmedUser } from './ConfirmedUser';
import { IConfirmedUser } from '../components.module';
import { action } from '@storybook/addon-actions';

const valueConfirmedUser = {
  confirmed: false,
  id: '1',
  firstName: 'Julia',
  lastName: 'Yatsko',
  jobTitle: 'web developer',
  image: '',
  role: 'player',
};

export default {
  title: 'Modal/ConfirmedUser',
  component: ConfirmedUser,
} as ComponentMeta<typeof ConfirmedUser>;

const Template: ComponentStory<typeof ConfirmedUser> = (args) => (
  <ConfirmedUser {...args} />
);

export const DefaultConfirmedUser = Template.bind({});
DefaultConfirmedUser.args = {
  handleConfirmedUser: action('handleConfirmedUser'),
  valueConfirmedUser,
};
