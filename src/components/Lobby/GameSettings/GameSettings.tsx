import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Field,
  reduxForm,
  formValueSelector,
  InjectedFormProps,
} from 'redux-form';
import { Button } from '../../UI/Button/Button';

import { GameCard } from '../../UI/Cards/GameCard/GameCard';
import { RenderField } from '../../UI/RenderField/RenderField';
import { RoundTime } from '../../UI/RoundTime/RoundTime';
import Switch from '../../UI/Switch/Switch';
import {
  EButtonType,
  ERenderFieldType,
  IGameSettingsForm,
} from '../../UI/ui.module';

import './GameSettings.scss';

export const GameSettingsForm: React.FC<
  IGameSettingsForm & InjectedFormProps<any, IGameSettingsForm>
> = ({
  cardsValues = [],
  handleEditCard,
  handleDeleteCard,
  handleSubmit,
  handleChangeMinute,
  handleChangeSeconds,
  roundTime,
  isTimerEnableState,
  setIsTimerEnable,
  successSettings,
}) => {
  const [addCard, setAddCard] = useState(false);

  return (
    <div className="lobby-item">
      <div className="lobby-item__title">
        <h3 className="text text-ruda">Game settings:</h3>
      </div>
      <form className="settings" onSubmit={handleSubmit}>
        <div className="settings-item">
          <p className="text text-ruda">Scram master as player:</p>
          <Field name="isplayer" component={Switch} />
        </div>
        <div className="settings-item">
          <p className="text text-ruda">Changing card in round end:</p>
          <Field name="isChangeEnable" component={Switch} checked={true} />
        </div>
        <div className="settings-item">
          <p className="text text-ruda">Сards turn over automatically:</p>
          <Field name="isTurnAuto" component={Switch} />
        </div>
        <div className="settings-item">
          <p className="text text-ruda">Automatically admit all new members:</p>
          <Field name="isLetAuto" component={Switch} />
        </div>
        <div className="settings-item">
          <p className="text text-ruda">Score type:</p>
          <Field
            name="cardsSet"
            component={RenderField}
            styles={ERenderFieldType.middle}
          />
        </div>
        <div className="settings-item">
          <p className="text text-ruda">Score type (Short):</p>
          <Field
            name="scoreType"
            component={RenderField}
            styles={ERenderFieldType.middle}
          />
        </div>
        <div className="settings-item">
          <p className="text text-ruda">Is timer needed:</p>
          <Field
            name="isTimerEnable"
            isChecked={isTimerEnableState}
            handleClick={setIsTimerEnable}
            component={Switch}
          />
        </div>
        {isTimerEnableState && (
          <div className="settings-item">
            <p className="text text-ruda">Round time:</p>
            <RoundTime
              isChange={true}
              handleChangeMinute={handleChangeMinute}
              handleChangeSeconds={handleChangeSeconds}
              minute={roundTime.minute!}
              seconds={roundTime.seconds!}
            />
          </div>
        )}
        <div className="settings-submit">
          <Button
            text="Save settings"
            type={EButtonType.submit}
            handleClick={handleSubmit}
            isDisabled={successSettings}
          />
          {successSettings && (
            <p className="text text-success">Changes saved!</p>
          )}
        </div>
      </form>
      <div className="settings-item-cards">
        <p className="text text-ruda">Add card values:</p>
        <div className="lobby-item__wrap">
          {cardsValues.map((item, index) => (
            <GameCard
              key={index}
              index={index}
              isEdit={true}
              scoreType={item.scoreType}
              number={item.number}
              handleEditCard={handleEditCard}
              handleDeleteCard={handleDeleteCard}
            />
          ))}
          {addCard && (
            <GameCard handleEditCard={handleEditCard} isEdit={true} setAddCard={setAddCard} />
          )}
          <GameCard isAddCard={true} handleAddCard={() => setAddCard(true)} />
        </div>
      </div>
    </div>
  );
};

export const GameSettings = reduxForm<any, IGameSettingsForm>({
  form: 'gameSettings',
})(GameSettingsForm);
