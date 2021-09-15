import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../../App.scss';
import { ModalWindow } from './ModalWindow';

const TestComponent: React.FC = () => (
  <div className="text text-bold" style={{ width: '200px', height: '200px' }}>
    Hello all
  </div>
);

export default {
  component: ModalWindow,
  title: 'UI Components/ModalWindow',
} as ComponentMeta<typeof ModalWindow>;

const TestModalWindow: React.FC = () => {
  const [isState, setIsState] = useState(true);

  const changeIsState = () => {
    setIsState((state) => !state);
  };

  return (
    <>
      {isState && (
        <ModalWindow handleClick={changeIsState}>
          <TestComponent />
        </ModalWindow>
      )}
    </>
  );
};
const Template: ComponentStory<typeof ModalWindow> = (args) => (
  <TestModalWindow {...args} />
);

export const ModalWindowOpen = Template.bind({});
ModalWindowOpen.args = {};
