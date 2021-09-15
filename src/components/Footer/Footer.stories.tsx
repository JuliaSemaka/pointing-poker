import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../App.scss';
import { Footer } from "./Footer";

export default {
  title: 'Footer',
  component: Footer
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const DefaultFooter = Template.bind({});