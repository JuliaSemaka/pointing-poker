import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { GameResult } from './GameResult';

const countPercentTask = (number: string | null): string | undefined => {
  return;
};

const cardsValues = [
  {
    scoreType: 'sp',
    number: '6',
  },
  {
    scoreType: 'sp',
    number: '12',
  },
];

const issues = [
  {
    title: 'Issue 505',
    priority: 'Low',
    id: '1',
    link: 'http://serga.aer',
    isChecked: true,
    mark: null,
  },
  {
    title: 'Issue 745',
    priority: 'Middle',
    id: '2',
    link: 'http://serga.aer',
    isChecked: false,
    mark: '8',
  },
  {
    title: 'Issue 325',
    priority: 'Hight',
    id: '3',
    link: 'http://serga.aer',
    isChecked: false,
    mark: '12',
  },
];

export default {
  title: 'UI Components/Game-GameResult',
  component: GameResult,
} as ComponentMeta<typeof GameResult>;

const Template: ComponentStory<typeof GameResult> = (args) => (
  <GameResult {...args} />
);

export const DefaultGameResult = Template.bind({});
DefaultGameResult.args = {
  cardsValues,
  title: 'Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)',
  issues,
  handleGameIssue: action('handleGameIssue'),
  countPercentTask,
};
