import React from 'react';
import { GameDataGame, IssuesGame, Score, Statistics } from '../../components';
import { EGameStatus } from '../../components/Game/game.module';
import { IGame } from '../pages.module';

import './Game.scss';

export const Game: React.FC<IGame> = ({
  isDealer,
  title,
  dealerData,
  handleStopGame,
  handleRunRound,
  gameStatus,
  issues,
  handleGameIssue,
  cardsValues,
  marksCurrentTask,
  members,
}) => (
  <div className="game wrapper">
    <main className="game-main">
      <GameDataGame
        isDealer={isDealer}
        title={title}
        dealerData={dealerData}
        handleStopGame={handleStopGame}
      />
      <IssuesGame
        isDealer={isDealer}
        handleRunRound={handleRunRound}
        gameStatus={gameStatus}
        issues={issues}
        handleGameIssue={handleGameIssue}
        cardsValues={cardsValues}
      />
      {isDealer && gameStatus === EGameStatus.inProgress && (
        <Statistics cardsValues={cardsValues} marksCurrentTask={marksCurrentTask} />
      )}
    </main>
    <aside className="game-score">
      <Score members={members} marksCurrentTask={marksCurrentTask} />
    </aside>
  </div>
);

export default Game;
