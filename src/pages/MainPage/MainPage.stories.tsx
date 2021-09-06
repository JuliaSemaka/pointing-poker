import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainPage } from './MainPage';

export default {
  title: 'Main Page',
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  url: ""
};

export const FillLobby = Template.bind({});
FillLobby.args = {
  url: "test.ru/lobby/connect&id=test_id_123"
};

