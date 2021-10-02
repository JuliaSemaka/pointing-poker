import React from 'react';

import { Button, ModalWindow } from '..';
import { IConfirmedUser } from '../components.module';
import { EButtonStyle } from '../UI/ui.module';
import './ConfirmedUser.scss';

export const ConfirmedUser: React.FC<IConfirmedUser> = ({
  handleConfirmedUser,
  valueConfirmedUser,
}) => {
  const { firstName, lastName, jobTitle } = valueConfirmedUser!;
  return (
    <ModalWindow handleClick={handleConfirmedUser}>
      <div className="confirmed-user">
        <h2 className="text text-title">Confirm user access?</h2>
        <p className="text">
          User{' '}
          <span className="text-bold">
            {firstName} {lastName}({jobTitle})
          </span>{' '}
          wants to join the game.
        </p>
        <div className="confirmed-user__buttons">
          <Button
            text="Yes"
            handleClick={() => handleConfirmedUser(true)}
            style={EButtonStyle.dark}
          />
          <Button
            text="No"
            handleClick={() => handleConfirmedUser(false)}
            style={EButtonStyle.light}
          />
        </div>
      </div>
    </ModalWindow>
  );
};
