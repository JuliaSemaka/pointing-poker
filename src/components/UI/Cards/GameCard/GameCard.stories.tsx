import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../../../App.scss';
import { GameCard } from './GameCard';
import { ERoundStatus } from '../../../Game/game.module';

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
  roundStatus: ERoundStatus.inProgress,
};

export const UnknownCard = Template.bind({});
UnknownCard.args = {
  isEdit: true,
  roundStatus: ERoundStatus.inProgress,
};

export const AddCard = Template.bind({});
AddCard.args = {
  isAddCard: true,
  roundStatus: ERoundStatus.inProgress,
};

export const CardCheck = Template.bind({});
CardCheck.args = {
  number: '12',
  scoreType: 'sp',
  isCheck: true,
  roundStatus: ERoundStatus.inProgress,
  isChangeEnable: true,
};
