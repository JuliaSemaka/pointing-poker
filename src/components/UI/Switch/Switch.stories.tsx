import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from './Switch';

export default {
  component: Switch,
  title: 'UI Components/Switch',
} as ComponentMeta<typeof Switch>;

interface SwitchWrapperProps {
  isChecked: boolean,
  label: string
}

const SwitchWrapper = ({isChecked, label}: SwitchWrapperProps) => {
  const [isCheck, setIsCheck] = useState(isChecked);

  return  <Switch 
    label={label}
    isChecked={isCheck}
    handleClick={setIsCheck}
  />

}
const Template: ComponentStory<typeof Switch> = (args) => <SwitchWrapper {...args} />;

export const ToggleOff = Template.bind({});

ToggleOff.args = {
  isChecked: false,
  label: 'Switcher:',
};

export const ToggleOn = Template.bind({});

ToggleOn.args = {
  ...ToggleOff.args,
  isChecked: true,
}; 
