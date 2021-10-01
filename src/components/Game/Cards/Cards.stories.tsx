import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CardsGame } from './CardsGame';

export default {
  title: 'UI Components/Game-Issues',
  component: CardsGame,
} as ComponentMeta<typeof CardsGame>;

const Template: ComponentStory<typeof CardsGame> = (args) => (
  <CardsGame {...args} />
);

export const DefaultIssues = Template.bind({});
DefaultIssues.args = {
  cardsValues: [],
};
