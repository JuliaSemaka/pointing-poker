import React from 'react';

import { Button } from '../UI/Button/Button';
import { ModalWindow } from '../UI/ModalWindow/ModalWindow';
import { EButtonStyle, IKickPlayerModal } from '../UI/ui.module';
import './KickPlayerModal.scss';

export const KickPlayerModal: React.FC<IKickPlayerModal> = ({
  playerName,
  actionKickButton,
  authorKick = null,
}) => (
  <ModalWindow handleClick={actionKickButton}>
    <div className="kick-player">
      {!authorKick ? (
        <>
          <h2 className="text text-title">Kick player?</h2>
          <p className="text text-ruda">
            Are you really want to remove player
            <span className="text-dark-green"> {playerName} </span>
            from game session?
          </p>{' '}
        </>
      ) : (
        <>
          <h2 className="text text-title">Kick</h2>
          <p className="text text-kick">
            <span className="text-dark-green">{authorKick} </span>
            want to kick member
            <span className="text-dark-green"> {playerName}</span>. Do you agree
            with it?
          </p>
        </>
      )}
      <div className="kick-player__block">
        <Button text="Yes" handleClick={() => actionKickButton(true)} />
        <Button
          text="No"
          handleClick={() => actionKickButton(false)}
          style={EButtonStyle.light}
        />
      </div>
    </div>
  </ModalWindow>
);
