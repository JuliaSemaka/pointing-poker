import React, { useEffect, useRef, useState } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

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
  editTitle,
  setEditTitle,
  handleEditTitle,
  handleStartGame,
  handleCancelGame,
  handleExit,
  initialValues,
}) => {
  const [titleGame, setTitleGame] = useState(title);
  const [successCopy, setSuccessCopy] = useState(false);
  const timer: any = useRef<NodeJS.Timeout>();
  const clickSave = () => {
    setEditTitle((prev) => !prev);
    handleEditTitle(titleGame);
  };
  const handleCopy = () => {
    setSuccessCopy(true);
    navigator.clipboard.writeText(initialValues.copyId);
    timer.current = setTimeout(() => {
      setSuccessCopy(false);
    }, 2000);
  };

  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);

  return (
    <div className="lobby-item">
      <div className="lobby-item__title">
        {editTitle ? (
          <>
            <RenderField
              value={titleGame}
              setTitleGame={setTitleGame}
              styles={ERenderFieldType.withButton}
            />
            <Button
              text="Save"
              style={EButtonStyle.light}
              handleClick={clickSave}
            />
          </>
        ) : (
          <>
            <h3 className="text text-ruda">{title}</h3>
            {isDealer && (
              <img
                className="crud-item"
                src={Edit}
                alt="edit"
                onClick={() => setEditTitle((prev) => !prev)}
              />
            )}
          </>
        )}
      </div>
      <div className="scram-master">
        <p className="text text-ruda text-ruda-small">Scram master:</p>
        <MemberCard
          firstName={dealerData?.firstName}
          lastName={dealerData?.lastName}
          position={dealerData?.jobTitle}
          isMyCard={isDealer}
          image={dealerData?.image}
        />
      </div>
      {isDealer && (
        <div className="key-lobby">
          <p className="text text-italic">Link to lobby:</p>
          <form className="key-lobby__copy">
            <Field
              name="copyId"
              component={RenderField}
              styles={ERenderFieldType.withButton}
              label="CopyId"
              disabled={true}
            />
            <Button
              text="Copy"
              handleClick={handleCopy}
              isDisabled={successCopy}
            />
            {successCopy && <p className="text text-success">Copy created!</p>}
          </form>
        </div>
      )}
      <div className="game-control">
        {isDealer ? (
          <>
            <Button text="Start Session" handleClick={handleStartGame} />
            <Button
              style={EButtonStyle.light}
              text="Cancel Session"
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
