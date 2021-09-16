import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Members } from './Members';

export default {
  title: 'Members',
  component: Members,
} as ComponentMeta<typeof Members>;

const Template: ComponentStory<typeof Members> = (args) => <Members {...args} />;

export const DefaultMembers = Template.bind({});
// DefaultMembers.args = {};
