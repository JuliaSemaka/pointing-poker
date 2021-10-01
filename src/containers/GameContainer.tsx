import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Spinners } from '../components';

import { EGameStatus, ERoundStatus } from '../components/Game/game.module';
import { Game } from '../pages';
import { IUsers } from '../pages/pages.module';
import { confirmedNewUser } from '../store/actions/main';
import { IReducer } from '../store/store.module';

export const GameContainer: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { socket, myId, confirmedUser, denied } = useSelector(
    (state: IReducer) => state.main
  );
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
    } else if (!gameStatus || gameStatus === EGameStatus.closed) {
      history.push('/');
    }
  }, [gameStatus]);

  const handleConfirmedUser = (value: boolean) => {
    if (value) {
      const userData = { ...confirmedUser, confirmed: true };
      socket!.send(JSON.stringify(userData));
      dispatch(confirmedNewUser(null));
    } else {
      const userData = { ...confirmedUser, method: 'set-denied' };
      socket!.send(JSON.stringify(userData));
      dispatch(confirmedNewUser(null));
    }
  };

  if (!id) {
    return (
      <>
        <Spinners />
      </>
    );
  }

  const { isTimerEnable, minute, seconds, isPlayer, isTurnAuto } = settings;

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

  const handleGameExit = () => {
    const data = {
      id,
      exitUserId: myId,
      method: 'exit-from-game',
    };
    socket!.send(JSON.stringify(data));
  };

  const propsGme = {
    myId: myId!,
    dealerId,
    isDealer: dealerId === myId,
    title,
    dealerData: users.find(({ id }) => id === dealerId)!,
    handleGameStopGame,
    handleGameExit,
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
    isPlayer,
    isTurnAuto,
    valueConfirmedUser: confirmedUser,
    handleConfirmedUser,
  };

  return <Game {...propsGme} />;
};
