import React from 'react';
import {
  CardsGame,
  ConfirmedUser,
  GameDataGame,
  IssuesGame,
  Score,
  Statistics,
} from '../../components';
import { ERoundStatus } from '../../components/Game/game.module';
import { IGame } from '../pages.module';

import './Game.scss';

export const Game: React.FC<IGame> = ({
  myId,
  dealerId,
  isDealer,
  title,
  dealerData,
  handleGameStopGame,
  handleGameExit,
  handleRunRound,
  handleRestartRound,
  handleNextIssye,
  gameStatus,
  roundStatus,
  issues,
  handleGameIssue,
  cardsValues,
  marksCurrentTask,
  members,
  isTimerEnable,
  minute,
  seconds,
  handleTimeFinish,
  isPlayer,
  isTurnAuto,
  valueConfirmedUser,
  handleConfirmedUser,
}) => (
  <div className="game wrapper">
    <main className="game-main">
      <GameDataGame
        myId={myId}
        isDealer={isDealer}
        title={title}
        dealerData={dealerData}
        handleGameStopGame={handleGameStopGame}
        handleGameExit={handleGameExit}
        roundStatus={roundStatus}
        minute={minute}
        seconds={seconds}
        handleTimeFinish={handleTimeFinish}
        handleRunRound={handleRunRound}
        handleRestartRound={handleRestartRound}
        handleNextIssye={handleNextIssye}
        isTimerEnable={isTimerEnable}
      />
      <IssuesGame issues={issues} handleGameIssue={handleGameIssue} />
      {(!isDealer || isPlayer) && <CardsGame cardsValues={cardsValues} />}
      {isDealer && roundStatus === ERoundStatus.finish && (
        <Statistics
          cardsValues={cardsValues}
          marksCurrentTask={marksCurrentTask}
        />
      )}
    </main>
    <aside className="game-score">
      <Score
        members={members}
        marksCurrentTask={marksCurrentTask}
        myId={myId}
        dealerId={dealerId}
      />
    </aside>
    {valueConfirmedUser && isDealer && (
      <ConfirmedUser
        handleConfirmedUser={handleConfirmedUser}
        valueConfirmedUser={valueConfirmedUser}
      />
    )}
  </div>
);

export default Game;
