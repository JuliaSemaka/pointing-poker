import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Issues } from './Issues';

const issues = [
  {
    id: '1',
    title: 'Issue 505',
    priority: 'Low',
    link: 'http://drbredbrd',
    isChecked: false,
    mark: null,
  },
  {
    id: '2',
    title: 'Issue 745',
    priority: 'Middle',
    link: 'http://drbredbrd',
    isChecked: false,
    mark: null,
  },
  {
    id: '3',
    title: 'Issue 325',
    priority: 'Hight',
    link: 'http://drbredbrd',
    isChecked: false,
    mark: null,
  },
];
export default {
  title: 'UI Components/Lobby-Issues',
  component: Issues,
} as ComponentMeta<typeof Issues>;

const Template: ComponentStory<typeof Issues> = (args) => <Issues {...args} />;

export const DefaultIssues = Template.bind({});
DefaultIssues.args = {
  issues,
  handleIssue: action('handleIssue'),
};
