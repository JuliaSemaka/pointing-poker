import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import Edit from '../../../assets/images/cards/edit.svg';
import { Button } from '../../UI/Button/Button';
import { MemberCard } from '../../UI/Cards/MemberCard/MemberCard';
import { RenderField } from '../../UI/RenderField/RenderField';
import { EButtonStyle, IGameDataForm } from '../../UI/ui.module';
import './GameData.scss';

export const GameDataForm: React.FC<
  IGameDataForm & InjectedFormProps<any, IGameDataForm>
> = ({ isDealer, handleSubmit }) => {

  return (
    <div className="lobby-item">
      <div className="lobby-item__title">
        <h3 className="text text-ruda">
          Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)
        </h3>
        {isDealer && <img className="crud-item" src={Edit} alt="edit" />}
      </div>
      <div className="scram-master">
        <p className="text text-ruda text-ruda-small">Scram master:</p>
        <MemberCard
          firstName="Juli"
          lastName="Yatsko"
          position="web developer"
          isMyCard={isDealer}
        />
      </div>
      {isDealer && (
        <div className="key-lobby">
          <p className="text text-italic">Link to lobby:</p>
          <div className="key-lobby__copy">
            <Field
              name="copyId"
              component={RenderField}
              label="CopyId"
              disabled={true}
            />
            <Button text="Copy" clickButton={handleSubmit} />
          </div>
        </div>
      )}
      <div className="game-control">
        {isDealer ? (
          <>
            <Button text="Start Game" clickButton={handleSubmit} />
            <Button
              style={EButtonStyle.light}
              text="Cancel game"
              clickButton={handleSubmit}
            />
          </>
        ) : (
          <Button
            style={EButtonStyle.light}
            text="Exit"
            clickButton={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export const GameData = reduxForm<any, IGameDataForm>({ form: 'copyId' })(
  GameDataForm
);
