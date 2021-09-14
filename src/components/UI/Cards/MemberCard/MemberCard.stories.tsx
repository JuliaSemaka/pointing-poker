import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../../../App.scss';
import { MemberCard } from './MemberCard';

export default {
  title: 'MemberCard',
  component: MemberCard,
} as ComponentMeta<typeof MemberCard>;

const Template: ComponentStory<typeof MemberCard> = (args) => (
  <MemberCard {...args} />
);

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  firstName: 'Julia',
  lastName: 'Yatsko',
  position: 'lead software engeneer',
};

export const MyCard = Template.bind({});
MyCard.args = {
  firstName: 'Julia',
  lastName: 'Yatsko',
  position: 'lead software engeneer',
  isMyCard: true,
};

export const MyCardWithoutName = Template.bind({});
MyCardWithoutName.args = {
  position: 'lead software engeneer',
  isMyCard: true,
};

export const UnknownUserCard = Template.bind({});
UnknownUserCard.args = {
  position: 'lead software engeneer',
};

export const CardWithImage = Template.bind({});
CardWithImage.args = {
  firstName: 'Julia',
  lastName: 'Yatsko',
  position: 'lead software engeneer',
  image: 'avatar.jpg',
};

export const CardWithImageWithRemove = Template.bind({});
CardWithImageWithRemove.args = {
  firstName: 'Julia',
  lastName: 'Yatsko',
  position: 'lead software engeneer',
  image: 'avatar.jpg',
  isRemove: true,
};
