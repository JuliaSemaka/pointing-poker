import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Members } from './Members';
const members = [
  {
    id: '1',
    firstName: 'Julia',
    lastName: 'Yatsko',
    jobTitle: 'web developer',
    image: null,
    role: 'dealer',
  },
  {
    id: '3',
    firstName: 'Ivan',
    lastName: 'Yatsko',
    jobTitle: 'junior developer',
    image: null,
    role: 'gamer',
  },
  {
    id: '4',
    firstName: 'Alex',
    lastName: 'Radchenko',
    jobTitle: 'lead',
    image: null,
    role: 'gamer',
  },
  {
    id: '3',
    firstName: 'Sasha',
    lastName: 'Bolshakov',
    jobTitle: 'project manager',
    image: null,
    role: 'gamer',
  },
];

export default {
  title: 'UI Components/Lobby-Members',
  component: Members,
} as ComponentMeta<typeof Members>;

const Template: ComponentStory<typeof Members> = (args) => (
  <Members {...args} />
);

export const DefaultMembers = Template.bind({});
DefaultMembers.args = {
  members,
  handleRemoveMember: action('handleRemoveMember'),
};
