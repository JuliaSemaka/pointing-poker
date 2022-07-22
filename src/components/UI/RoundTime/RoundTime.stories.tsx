import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../../App.scss';
import { RoundTime } from './RoundTime';
import { action } from '@storybook/addon-actions';

export default {
  title: 'UI Components/RoundTime',
  component: RoundTime,
} as ComponentMeta<typeof RoundTime>;

const Template: ComponentStory<typeof RoundTime> = (args) => (
  <RoundTime {...args} />
);

export const DefaultRoundTime = Template.bind({});
DefaultRoundTime.args = {};

export const RoundTimeWithTime = Template.bind({});
RoundTimeWithTime.args = {
  minute: '12',
  seconds: '32',
};

export const ChangeRoundTimeWithTime = Template.bind({});
ChangeRoundTimeWithTime.args = {
  minute: '12',
  seconds: '32',
  isChange: true,
  handleChangeMinute: action('handleChangeMinute'),
  handleChangeSeconds: action('handleChangeSeconds'),
};
