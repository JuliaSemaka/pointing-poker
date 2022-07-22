import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../App.scss';
import { KickPlayerModal } from './KickPlayerModal';
import { IKickPlayerModal } from '../UI/ui.module';

export default {
  title: 'KickPlayerModal',
  component: KickPlayerModal,
} as ComponentMeta<typeof KickPlayerModal>;

const TestKickPlayerModal: React.FC<IKickPlayerModal> = (props) => {
  const [isOpened, setIsOpened] = useState(true);

  function changeIsState(value: boolean) {
    setIsOpened((state) => !state);
    console.log(`Пользователь сказал: ${value}`);
  }

  return (
    <>
      {isOpened && (
        <KickPlayerModal {...props} actionKickButton={changeIsState} />
      )}
    </>
  );
};

const Template: ComponentStory<typeof KickPlayerModal> = (args) => (
  <TestKickPlayerModal {...args} />
);

export const DefaultKickPlayerModal = Template.bind({});
DefaultKickPlayerModal.args = {
  playerName: 'Ivan',
};

export const KickPlayerModalTwoPeople = Template.bind({});
KickPlayerModalTwoPeople.args = {
  playerName: 'Ivan',
  authorKick: 'Julia',
};
