import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../../../App.scss';
import { IssueCard } from './IssueCard';
import { ETypeCard } from '../../ui.module';

export default {
  title: 'IssueCard',
  component: IssueCard,
} as ComponentMeta<typeof IssueCard>;

const Template: ComponentStory<typeof IssueCard> = (args) => (
  <IssueCard {...args} />
);

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  title: 'Issue 542',
};

export const AddCard = Template.bind({});
AddCard.args = {
  title: 'Issue 542 Issue 542',
  priority: 'Low prority',
  type: ETypeCard.add,
};

export const RemoveCard = Template.bind({});
RemoveCard.args = {
  title: 'Issue 542',
  priority: 'Low prority',
  type: ETypeCard.remove,
};

export const CheckCard = Template.bind({});
CheckCard.args = {
  title: 'Issue 542',
  isCheck: true,
};
