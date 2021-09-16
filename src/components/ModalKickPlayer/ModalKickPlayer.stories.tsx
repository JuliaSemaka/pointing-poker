import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../App.scss';
import { ModalKickPlayer } from "./ModalKickPlayer";

export default {
  title: 'ModalKickPlayer',
  component: ModalKickPlayer
} as ComponentMeta<typeof ModalKickPlayer>;

const Template: ComponentStory<typeof ModalKickPlayer> = (args) => <ModalKickPlayer {...args} />;

export const DefaultModalKickPlayer = Template.bind({});
