import React from 'react';
import { GameDataGame, IssuesGame, Score, Statistics } from '../../components';
import { EGameStatus } from '../../components/Game/game.module';
import { GameResult } from '../../components/GameResult/GameResult';
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
  countPercentTask,
}) => {
  if (gameStatus === EGameStatus.finished) {
    return (
      <GameResult
        title={title}
        issues={issues}
        handleGameIssue={handleGameIssue}
        cardsValues={cardsValues}
        countPercentTask={countPercentTask}
      />
    );
  }

  return (
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
        />
        <IssuesGame
          isDealer={isDealer}
          handleRunRound={handleRunRound}
          handleRestartRound={handleRestartRound}
          handleNextIssye={handleNextIssye}
          roundStatus={roundStatus}
          issues={issues}
          handleGameIssue={handleGameIssue}
          cardsValues={cardsValues}
          isTimerEnable={isTimerEnable}
          minute={minute}
          seconds={seconds}
          handleTimeFinish={handleTimeFinish}
        />
        {isDealer && gameStatus === EGameStatus.inProgress && (
          <Statistics
            cardsValues={cardsValues}
            countPercentTask={countPercentTask}
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
    </div>
  );
};

export default Game;
