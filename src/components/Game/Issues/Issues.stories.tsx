import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { IssuesGame } from './Issues';
import { EGameStatus } from '../game.module';

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
  title: 'UI Components/Game-Issues',
  component: IssuesGame,
} as ComponentMeta<typeof IssuesGame>;

const Template: ComponentStory<typeof IssuesGame> = (args) => (
  <IssuesGame {...args} />
);

export const DefaultIssues = Template.bind({});
DefaultIssues.args = {
  issues,
  handleRunRound: action('handleRunRound'),
  handleGameIssue: action('handleGameIssue'),
  isDealer: true,
  cardsValues: [],
};
