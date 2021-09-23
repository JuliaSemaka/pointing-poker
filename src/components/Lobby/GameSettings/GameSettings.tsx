import React, { useState } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { GameCard } from '../../UI/Cards/GameCard/GameCard';
import { RenderField } from '../../UI/RenderField/RenderField';
import { RoundTime } from '../../UI/RoundTime/RoundTime';
import Switch from '../../UI/Switch/Switch';
import { ERenderFieldType, IGameSettingsForm } from '../../UI/ui.module';

import './GameSettings.scss';

export const GameSettingsForm: React.FC<
  IGameSettingsForm & InjectedFormProps<any, IGameSettingsForm>
> = ({
  isPlayer = true,
  isChangeEnable = true,
  isTimerEnable = true,
  isTurnAuto = true,
  isLetAuto = true,
  cardsValues = [],
  handleAddCard,
  handleEditCard,
  handleSubmitGameSettings,
  handleChangeMinute,
  handleChangeSeconds,
}) => {
  const [isPlayerState, setIsPlayer] = useState(isPlayer);
  const [isChangeEnableState, setIsChangeEnable] = useState(isChangeEnable);
  const [isTimerEnableState, setIsTimerEnable] = useState(isTimerEnable);
  const [isTurnAutoState, setIsTurnAuto] = useState(isTurnAuto);
  const [isLetAutoState, setIsLetAuto] = useState(isLetAuto);

  return (
    <div className="lobby-item">
      <div className="lobby-item__title">
        <h3 className="text text-ruda">Game settings:</h3>
      </div>
      <form className="settings" onSubmit={handleSubmitGameSettings}>
        <div className="settings-item">
          <p className="text text-ruda">Scram master as player:</p>
          <Switch isChecked={isPlayerState} handleClick={setIsPlayer} />
        </div>
        <div className="settings-item">
          <p className="text text-ruda">Changing card in round end:</p>
          <Switch
            isChecked={isChangeEnableState}
            handleClick={setIsChangeEnable}
          />
        </div>
        <div className="settings-item">
          <p className="text text-ruda">Сards turn over automatically:</p>
          <Switch isChecked={isTimerEnableState} handleClick={setIsTurnAuto} />
        </div>
        <div className="settings-item">
          <p className="text text-ruda">Automatically admit all new members:</p>
          <Switch isChecked={isTurnAutoState} handleClick={setIsLetAuto} />
        </div>
        <div className="settings-item">
          <p className="text text-ruda">Score type:</p>
          <Field name="cardsSet" component={RenderField} styles={ERenderFieldType.middle} label="CardsSet" />
        </div>
        <div className="settings-item">
          <p className="text text-ruda">Score type (Short):</p>
          <Field name="scoreType" component={RenderField} styles={ERenderFieldType.middle} label="ScoreType" />
        </div>
        <div className="settings-item">
          <p className="text text-ruda">Is timer needed:</p>
          <Switch isChecked={isLetAutoState} handleClick={setIsTimerEnable} />
        </div>
        {isLetAutoState && (
          <div className="settings-item">
            <p className="text text-ruda">Round time:</p>
            <RoundTime isChange={true} handleChangeMinute={handleChangeMinute} handleChangeSeconds={handleChangeSeconds} />
          </div>
        )}
        <div className="settings-item-cards">
          <p className="text text-ruda">Add card values:</p>
          <div className="lobby-item__wrap">
            {cardsValues.map((item, index) => (
              <GameCard
                key={index}
                isEdit={true}
                scoreType={item.scoreType}
                number={item.number}
                handleEditCard={handleEditCard}
              />
            ))}
            <GameCard isAddCard={true} handleAddCard={handleAddCard} />
          </div>
        </div>
      </form>
    </div>
  );
};

export const GameSettings = reduxForm<any, IGameSettingsForm>({
  form: 'gameSettings',
})(GameSettingsForm);
