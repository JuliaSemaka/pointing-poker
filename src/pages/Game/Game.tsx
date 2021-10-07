import React from 'react';
import {
  CardsGame,
  ConfirmedUser,
  CreateIssue,
  GameDataGame,
  IssuesGame,
  Score,
  Statistics,
} from '../../components';
import { ERole } from '../../components/components.module';
import { ERoundStatus } from '../../components/Game/game.module';
import { EGameStatus } from '../../components/Game/game.module';
import { GameResult } from '../../components/GameResult/GameResult';
import { KickPlayerModal } from '../../components/KickPlayerModal/KickPlayerModal';
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
  countPercentTask,
  handleClickCard,
  showIssue,
  handleCloseModal,
  handelAddIssue,
  handleCheckedIssue,
  initialIssuesValue,
  kickPlayer,
  delUser,
  actionKickButton,
  handleRemoveMember,
}) => {
  if (gameStatus === EGameStatus.finished) {
    return (
      <GameResult
        title={title}
        issues={issues}
        handleGameIssue={handleGameIssue}
        cardsValues={cardsValues}
        countPercentTask={countPercentTask}
        isDealer={isDealer}
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
          handleRunRound={handleRunRound}
          handleRestartRound={handleRestartRound}
          handleNextIssye={handleNextIssye}
          isTimerEnable={isTimerEnable}
          issues={issues}
        />
        <IssuesGame
          issues={issues}
          handleGameIssue={handleGameIssue}
          handleCheckedIssue={handleCheckedIssue}
          isDealer={isDealer}
        />
        {(!isDealer || isPlayer) &&
          members.find(
            (item) => item.id === myId && item.role !== ERole.observer
          ) && (
            <CardsGame
              cardsValues={cardsValues}
              handleClickCard={handleClickCard}
              roundStatus={roundStatus}
              marksCurrentTask={marksCurrentTask}
              myId={myId}
            />
          )}
        {isDealer && roundStatus === ERoundStatus.finish && (
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
          isPlayer={isPlayer}
          isTurnAuto={isTurnAuto}
          roundStatus={roundStatus}
          handleRemoveMember={handleRemoveMember}
        />
      </aside>
      {valueConfirmedUser && isDealer && (
        <ConfirmedUser
          handleConfirmedUser={handleConfirmedUser}
          valueConfirmedUser={valueConfirmedUser}
        />
      )}
      {showIssue && (
        <CreateIssue
          handleCloseModal={handleCloseModal}
          onSubmit={handelAddIssue}
          initialValues={initialIssuesValue}
        />
      )}
      {kickPlayer && delUser && (
        <KickPlayerModal
          playerName={delUser.delUser}
          actionKickButton={actionKickButton}
          authorKick={
            myId === delUser.deleterUserId ? undefined : delUser.deleterUserId
          }
          members={members}
        />
      )}
    </div>
  );
};

export default Game;
