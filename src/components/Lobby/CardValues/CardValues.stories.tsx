import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardValues } from './CardValues';

export default {
  title: 'CardValues',
  component: CardValues,
} as ComponentMeta<typeof CardValues>;

const Template: ComponentStory<typeof CardValues> = (args) => <CardValues {...args} />;

export const DefaultCardValues = Template.bind({});
// DefaultCardValues.args = {};
