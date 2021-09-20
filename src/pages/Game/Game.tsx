import React from 'react';
import { GameData, Issues, Score, Statistics } from '../../components';
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
}) => (
  <div className="game wrapper">
    <main className="game-main">
      <GameData
        isDealer={isDealer}
        title={title}
        dealerData={dealerData}
        handleStopGame={handleStopGame}
      />
      <Issues
        isDealer={isDealer}
        handleRunRound={handleRunRound}
        gameStatus={gameStatus}
        issues={issues}
        handleGameIssue={handleGameIssue}
        cardsValues={cardsValues}
      />
      {isDealer && gameStatus === EGameStatus.inProgress && (
        <Statistics cardsValues={cardsValues} />
      )}
    </main>
    <aside className="game-score">
      <Score />
    </aside>
  </div>
);

export default Game;
