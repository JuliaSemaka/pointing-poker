import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Spinners } from '../components';

import { EGameStatus, ERoundStatus } from '../components/Game/game.module';
import { Game } from '../pages';
import { IReducer } from '../store/store.module';

export const GameContainer: React.FC = () => {
  const history = useHistory();
  const { socket, myId } = useSelector((state: IReducer) => state.main);
  const {
    cards,
    delUser,
    dealerId,
    title,
    gameStatus,
    roundStatus,
    id,
    marksCurrentTask,
    settings,
    tasks,
    users,
  } = useSelector((state: IReducer) => state.game);
  useEffect(() => {
    if (gameStatus === EGameStatus.created) {
      history.push('/lobby');
    } else if (gameStatus === EGameStatus.closed) {
      history.push('/');
    }
  }, [gameStatus]);

  if (!id) {
    return (
      <>
        <Spinners />
      </>
    );
  }

  const { isTimerEnable, minute, seconds } = settings;

  const testFunc = () => {
    console.log(1);
  };

  const handleRunRound = () => {
    const data = {
      id,
      roundStatus: ERoundStatus.inProgress,
      method: 'set-round-status',
    };
    socket!.send(JSON.stringify(data));
  };

  const handleRestartRound = () => {
    const data = {
      id,
      roundStatus: ERoundStatus.start,
      method: 'set-round-status',
    };
    socket!.send(JSON.stringify(data));
    const dataMark = {
      id,
      marksCurrentTask: [],
      method: 'set-mark-current-task',
    };
    socket!.send(JSON.stringify(dataMark));
    handleRunRound();
  };

  const handleGameStopGame = () => {
    const data = {
      id,
      gameStatus: EGameStatus.finished,
      method: 'set-game-status',
    };
    socket!.send(JSON.stringify(data));
  };

  const handleTimeFinish = () => {
    const data = {
      id,
      gameStatus: ERoundStatus.finish,
      method: 'set-round-status',
    };
    socket!.send(JSON.stringify(data));
  };

  const propsGme = {
    myId: myId!,
    dealerId,
    isDealer: dealerId === myId,
    title,
<<<<<<< HEAD
    dealerData: users.find(({ id }) => id === dealerId)!,
    handleGameStopGame: testFunc,
=======
    dealerData: users.find(({ id }) => id === dillerId)!,
    handleGameStopGame,
>>>>>>> ad6a3d5 (feat: correct game page)
    handleGameExit: testFunc,
    handleRunRound,
    handleRestartRound,
    handleNextIssye: testFunc,
    gameStatus,
    roundStatus,
    issues: tasks,
    handleGameIssue: testFunc,
    cardsValues: cards,
    marksCurrentTask,
    members: users,
    isTimerEnable,
    minute,
    seconds,
    handleTimeFinish,
  };

  return <Game {...propsGme} />;
};
