import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Issues } from './Issues';

const issues = [
  { title: 'Issue 505', priority: 'Low' },
  { title: 'Issue 745', priority: 'Middle' },
  { title: 'Issue 325', priority: 'Hight' },
];

export default {
  title: 'UI Components/Issues',
  component: Issues,
} as ComponentMeta<typeof Issues>;

const Template: ComponentStory<typeof Issues> = (args) => <Issues {...args} />;

export const DefaultIssues = Template.bind({});
DefaultIssues.args = {
  issues,
  handleIssue: action('handleIssue'),
};
