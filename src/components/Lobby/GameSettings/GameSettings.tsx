import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { GameCard } from '../../UI/Cards/GameCard/GameCard';
import { RenderField } from '../../UI/RenderField/RenderField';
import { RoundTime } from '../../UI/RoundTime/RoundTime';
import Switch from '../../UI/Switch/Switch';
import { IGameSettingsForm } from '../../UI/ui.module';

import './GameSettings.scss';

export const GameSettingsForm: React.FC<any> = ({
  isPlayer = true,
  isChangeEnable = true,
  isTimerEnable = true,
  isTurnAuto = true,
  isLetAuto = true,
  cardsSet = 'story point',
  scoreType = 'SP',
}) => {
  const [getIsPlayer, setIsPlayer] = useState(isPlayer);
  const [getIsChangeEnable, setIsChangeEnable] = useState(isChangeEnable);
  const [getIsTimerEnable, setIsTimerEnable] = useState(isTimerEnable);
  const [getIsTurnAuto, setIsTurnAuto] = useState(isTurnAuto);
  const [getIsLetAuto, setIsLetAuto] = useState(isLetAuto);

  return (
    <div className="lobby-item">
      <div className="lobby-item__title">
        <h3 className="text text-ruda">Game settings:</h3>
      </div>
      <div className="settings">
        <div className="settings-item">
          <p className="text text-ruda">Scram master as player:</p>
          <Switch isChecked={getIsPlayer} handleClick={setIsPlayer} />
        </div>
        <div className="settings-item">
          <p className="text text-ruda">Changing card in round end:</p>
          <Switch
            isChecked={getIsChangeEnable}
            handleClick={setIsChangeEnable}
          />
        </div>
        <div className="settings-item">
          <p className="text text-ruda">Сards turn over automatically:</p>
          <Switch isChecked={getIsTurnAuto} handleClick={setIsTurnAuto} />
        </div>
        <div className="settings-item">
          <p className="text text-ruda">Automatically admit all new members:</p>
          <Switch isChecked={getIsLetAuto} handleClick={setIsLetAuto} />
        </div>
        <div className="settings-item">
          <p className="text text-ruda">Score type:</p>
          <Field
            name="cardsSet"
            component={RenderField}
            label="CardsSet"
            initialValues={{ cardsSet: { cardsSet } }}
          />
        </div>
        <div className="settings-item">
          <p className="text text-ruda">Score type (Short):</p>
          <Field
            name="scoreType"
            component={RenderField}
            label="ScoreType"
            initialValues={{ scoreType: { scoreType } }}
          />
        </div>
        <div className="settings-item">
          <p className="text text-ruda">Is timer needed:</p>
          <Switch isChecked={getIsTimerEnable} handleClick={setIsTimerEnable} />
        </div>
        {getIsTimerEnable && (
          <div className="settings-item">
            <p className="text text-ruda">Round time:</p>
            <RoundTime isChange={true} />
          </div>
        )}
        <div className="settings-item-cards">
          <p className="text text-ruda">Add card values:</p>
          <div className="lobby-item__wrap">
            <GameCard isEdit={true} />
            <GameCard isEdit={true} scoreType="sp" number="12" />
            <GameCard isEdit={true} scoreType="sp" number="1" />
            <GameCard isEdit={true} scoreType="sp" number="6" />
            <GameCard isAddCard={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const GameSettings = reduxForm({ form: 'gameSettings' })(
  GameSettingsForm
);
