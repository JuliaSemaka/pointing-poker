import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { EGameStatus } from '../components/Game/game.module';
import { Game } from '../pages';
import { IReducer } from '../store/store.module';

export const GameContainer: React.FC = () => {
  const { socket, myId } = useSelector((state: IReducer) => state.main);
  const {
    cards,
    delUser,
    dealerId,
    title,
    gameStatus,
    id,
    marksCurrentTask,
    settings,
    tasks,
    users,
  } = useSelector((state: IReducer) => state.game);

  if (!id) {
    return <></>;
  }

  const { isTimerEnable, minute, seconds } = settings;

  const testFunc = () => {
    console.log(1);
  };

  const handleRunRound = () => {
    const data = {
      id,
      gameStatus: EGameStatus.inProgress,
      method: 'set-game-status',
    };
    socket!.send(JSON.stringify(data));
  };

  const propsGme = {
    myId: myId!,
    dealerId,
    isDealer: dealerId === myId,
    title,
    dealerData: users.find(({ id }) => id === dealerId)!,
    handleGameStopGame: testFunc,
    handleGameExit: testFunc,
    handleRunRound,
    handleRestartRound: testFunc,
    handleNextIssye: testFunc,
    gameStatus,
    issues: tasks,
    handleGameIssue: testFunc,
    cardsValues: cards,
    marksCurrentTask,
    members: users,
    isTimerEnable,
    minute,
    seconds,
  };

  return <Game {...propsGme} />;
};
