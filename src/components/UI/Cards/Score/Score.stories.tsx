import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../../../App.scss';
import { ScoreCard } from './Score';

export default {
  title: 'UI Components/Score',
  component: ScoreCard,
} as ComponentMeta<typeof ScoreCard>;

const Template: ComponentStory<typeof ScoreCard> = (args) => (
  <ScoreCard {...args} />
);

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  scoreType: 'sp',
  number: '6',
};

export const MyCard = Template.bind({});
MyCard.args = {
  scoreType: null,
  number: null,
};
