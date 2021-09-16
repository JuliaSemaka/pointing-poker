import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../../../App.scss';
import { GameCard } from './GameCard';

export default {
  title: 'UI Components/GameCard',
  component: GameCard,
} as ComponentMeta<typeof GameCard>;

const Template: ComponentStory<typeof GameCard> = (args) => (
  <GameCard {...args} />
);

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  number: '12',
  scoreType: 'sp',
};

export const UnknownCard = Template.bind({});
UnknownCard.args = {
  isEdit: true,
};

export const AddCard = Template.bind({});
AddCard.args = {
  isAddCard: true,
};

export const CardCheck = Template.bind({});
CardCheck.args = {
  number: '12',
  scoreType: 'sp',
  isCheck: true,
};
