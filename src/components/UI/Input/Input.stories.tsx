import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../../App.scss';
import { Input } from './Input';
import { EInputType } from '../ui.module';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  value: 'Julia',
  type: EInputType.big,
};

export const BigInput = Template.bind({});
BigInput.args = {
  value: 'Julia',
  type: EInputType.big,
};

export const MiddleInput = Template.bind({});
MiddleInput.args = {
  value: 'Julia',
  type: EInputType.middle,
};

export const WidthButtonInput = Template.bind({});
WidthButtonInput.args = {
  value: 'Julia',
  type: EInputType.widthButton,
};
