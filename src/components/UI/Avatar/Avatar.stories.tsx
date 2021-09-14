import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../../App.scss';
import { Avatar } from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const DefaultAvatar = Template.bind({});
DefaultAvatar.args = {};

export const InitialsAvatar = Template.bind({});
InitialsAvatar.args = {
  initials: 'RT',
};

export const ImageAvatar = Template.bind({});
ImageAvatar.args = {
  image: 'avatar.jpg',
};
