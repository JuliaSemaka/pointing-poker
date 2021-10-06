import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Spinners } from '../components';

import {
  EGameStatus,
  ERoundStatus,
  IMarksCurrentTask,
} from '../components/Game/game.module';
import { EHandleIssue } from '../components/UI/ui.module';
import { Game } from '../pages';
import { enterTheGame } from '../store/actions/game';
import { confirmedNewUser } from '../store/actions/main';
import { IGameState, IReducer } from '../store/store.module';

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
  const [showIssue, setShowIssue] = useState(false);

  useEffect(() => {
    if (gameStatus === EGameStatus.created) {
      history.push('/lobby');
    } else if (!gameStatus || gameStatus === EGameStatus.closed) {
      history.push('/');
    }
  }, [gameStatus]);

  useEffect(() => {
    if (!users?.some((item) => item.id === myId)) {
      dispatch(enterTheGame({} as IGameState));
    }
  }, [users]);

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
      roundStatus: ERoundStatus.finish,
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

  const countPercentTask = (number: string | null): string | undefined => {
    if (!marksCurrentTask.length) {
      return;
    }

    return `${(
      (marksCurrentTask.filter(({ mark }) => mark === number).length /
        marksCurrentTask.length) *
      100
    ).toFixed(1)}%`;
  };

  const handleClickCard = (number: string, scoreType: string | null) => {
    const mark: IMarksCurrentTask = {
      idUser: myId!,
      mark: number,
      scoreType,
    };
    const ind = marksCurrentTask.findIndex((item) => item.idUser === myId);
    let newArr: IMarksCurrentTask[] = [];
    if (ind === -1) {
      newArr = marksCurrentTask.concat([mark]);
    } else {
      newArr = marksCurrentTask.map((item, index) =>
        index === ind ? mark : item
      );
    }
    const data = {
      id,
      marksCurrentTask: newArr,
      method: 'set-mark-current-task',
    };

    socket!.send(JSON.stringify(data));
  };

  const handleGameIssue = (value: EHandleIssue, idIssue?: string) => {
    if (value === EHandleIssue.add) {
      setShowIssue(true);
    } else if (value === EHandleIssue.remove) {
      const newTasks = tasks.filter((item) => item.id !== idIssue);
      const data = {
        id,
        issues: newTasks,
        method: 'correct-issues',
      };
      socket!.send(JSON.stringify(data));
    } else if (value === EHandleIssue.show) {
      console.log(value);
    }
  };

  const handleCloseModal = (value?: boolean) => {
    setShowIssue(value!);
  };

  const handelAddIssue = (props: any) => {
    const idIssue = (+new Date()).toString(16);
    const newIssue = {
      priority: 'Low',
      ...props,
      id: idIssue,
      isChecked: tasks.length === 0 ? true : false,
      mark: null,
    };

    const newTasks = [...tasks, newIssue];

    const data = {
      id,
      issues: newTasks,
      method: 'correct-issues',
    };
    socket!.send(JSON.stringify(data));
    setShowIssue(false);
  };

  const handleCheckedIssue = (idIssue: string) => {
    const newTasks = tasks.map((item) => {
      item.isChecked = item.id === idIssue;
      return item;
    });

    const data = {
      id,
      issues: newTasks,
      method: 'correct-issues',
    };
    socket!.send(JSON.stringify(data));
    setShowIssue(false);
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
    handleGameIssue,
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
    countPercentTask,
    handleClickCard,
    showIssue,
    handleCloseModal,
    handelAddIssue,
    handleCheckedIssue,
  };

  return <Game {...propsGme} />;
};
