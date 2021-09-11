import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import Switch  from './Switch';

export default {
  component: Switch,
  title: 'UI Components/Switch',
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const ToggleOff = Template.bind({});

ToggleOff.args = {
  check: false,
  label: 'Switcher:',
  handleClick: action('onChange'),
};

export const ToggleOn = Template.bind({});

ToggleOn.args = {
  ...ToggleOff.args,
  check: true,
};