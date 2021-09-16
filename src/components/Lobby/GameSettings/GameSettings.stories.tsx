import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GameSettings } from './GameSettings';

export default {
  title: 'GameSettings',
  component: GameSettings,
} as ComponentMeta<typeof GameSettings>;

const Template: ComponentStory<typeof GameSettings> = (args) => <GameSettings {...args} />;

export const DefaultGameSettings = Template.bind({});
// DefaultGameSettings.args = {};
