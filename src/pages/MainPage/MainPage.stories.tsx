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

export const FillLobbyWrongUrl = Template.bind({});
FillLobbyWrongUrl.args = {
  url: "test.ru/lobby/connect&id=test_id_123"
};

export const FillLobbyRightUrl = Template.bind({});
FillLobbyRightUrl.args = {
  url: "https://ant.design/components/space/"
};

