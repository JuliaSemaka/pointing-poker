import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Issues } from './Issues';

export default {
  title: 'Issues',
  component: Issues,
} as ComponentMeta<typeof Issues>;

const Template: ComponentStory<typeof Issues> = (args) => <Issues {...args} />;

export const DefaultIssues = Template.bind({});
// DefaultIssues.args = {};
