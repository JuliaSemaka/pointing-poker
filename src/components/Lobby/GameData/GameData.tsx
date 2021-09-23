import React, { useState } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Edit from '../../../assets/images/cards/edit.svg';
import { Button } from '../../UI/Button/Button';
import { MemberCard } from '../../UI/Cards/MemberCard/MemberCard';
import { RenderField } from '../../UI/RenderField/RenderField';
import {
  EButtonStyle,
  ERenderFieldType,
  EType,
  IGameDataForm,
} from '../../UI/ui.module';
import './GameData.scss';

export const GameDataForm: React.FC<
  IGameDataForm & InjectedFormProps<any, IGameDataForm>
> = ({
  isDealer,
  title,
  dealerData,
  handleEditTitle,
  handleCopy,
  handleStartGame,
  handleCancelGame,
  handleExit,
}) => {
  return (
    <div className="lobby-item">
      <div className="lobby-item__title">
        <h3 className="text text-ruda">{title}</h3>
        {isDealer && (
          <img
            className="crud-item"
            src={Edit}
            alt="edit"
            onClick={handleEditTitle}
          />
        )}
      </div>
      <div className="scram-master">
        <p className="text text-ruda text-ruda-small">Scram master:</p>
        <MemberCard
          firstName={dealerData.firstName}
          lastName={dealerData.lastName}
          position={dealerData.jobTitle}
          isMyCard={isDealer}
        />
      </div>
      {isDealer && (
        <div className="key-lobby">
          <p className="text text-italic">Link to lobby:</p>
          <CopyToClipboard text="wwwww">
            <p className="copy-clipboard">Copy to clipboard</p>
          </CopyToClipboard>
          <form className="key-lobby__copy" onSubmit={handleCopy}>
            <Field
              name="copyId"
              component={RenderField}
              styles={ERenderFieldType.withButton}
              label="CopyId"
              disabled={true}
            />
            <CopyToClipboard text="234567876543">
              <Button text="Copy" handleClick={handleCopy} />
            </CopyToClipboard>
          </form>
        </div>
      )}
      <div className="game-control">
        {isDealer ? (
          <>
            <Button text="Start Game" handleClick={handleStartGame} />
            <Button
              style={EButtonStyle.light}
              text="Cancel game"
              handleClick={handleCancelGame}
            />
          </>
        ) : (
          <Button
            style={EButtonStyle.light}
            text="Exit"
            handleClick={handleExit}
          />
        )}
      </div>
    </div>
  );
};

export const GameData = reduxForm<any, IGameDataForm>({ form: 'copyId' })(
  GameDataForm
);
