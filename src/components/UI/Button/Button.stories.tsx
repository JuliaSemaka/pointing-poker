import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../../App.scss';
import { Button } from './Button';
import { EButtonStyle } from '../ui.module';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  text: 'Click',
  style: EButtonStyle.dark,
  isDisabled: false,
};

export const DarkButton = Template.bind({});
DarkButton.args = {
  text: 'Click',
  style: EButtonStyle.dark,
  isDisabled: false,
};

export const DarkDisabledButton = Template.bind({});
DarkDisabledButton.args = {
  text: 'Click',
  style: EButtonStyle.dark,
  isDisabled: true,
};

export const LightButton = Template.bind({});
LightButton.args = {
  text: 'Click',
  style: EButtonStyle.light,
  isDisabled: false,
};

export const LightDisabledButton = Template.bind({});
LightDisabledButton.args = {
  text: 'Click',
  style: EButtonStyle.light,
  isDisabled: true,
};
