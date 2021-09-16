import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GameData } from './GameData';

export default {
  title: 'GameData',
  component: GameData,
} as ComponentMeta<typeof GameData>;

const Template: ComponentStory<typeof GameData> = (args) => <GameData {...args} />;

export const DefaultGameData = Template.bind({});
// DefaultGameData.args = {};
