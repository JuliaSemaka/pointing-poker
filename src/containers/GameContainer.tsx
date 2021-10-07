import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Spinners } from '../components';

import {
  EGameStatus,
  ERoundStatus,
  IIssue,
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
  const [initialIssue, setInitialIssue] = useState<IIssue>({} as IIssue);
  const [kickPlayer, setKickPlayer] = useState(false);

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

  useEffect(() => {
    if (marksCurrentTask?.length && roundStatus === ERoundStatus.finish) {
      const mark = marksCurrentTask.reduce(
        (res, item) =>
          item.mark !== 'Unknown' ? res + Number(item.mark) : res,
        0
      );
      const len = marksCurrentTask.filter(
        (item) => item.mark !== 'Unknown'
      ).length;
      const newTasks = tasks.map((item) =>
        item.isChecked ? { ...item, mark: Math.round(mark / len) } : item
      );
      const data = {
        id,
        issues: newTasks,
        method: 'correct-issues',
      };
      socket!.send(JSON.stringify(data));
    } else if (roundStatus === ERoundStatus.start) {
      const newTasks = tasks.map((item) =>
        item.isChecked ? { ...item, mark: null } : item
      );
      const data = {
        id,
        issues: newTasks,
        method: 'correct-issues',
      };
      socket!.send(JSON.stringify(data));
    }
  }, [roundStatus]);

  useEffect(() => {
    if (delUser !== null && delUser?.delUser !== myId) {
      setKickPlayer(true);
    } else {
      setKickPlayer(false);
    }
  }, [delUser]);

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
      setInitialIssue({} as IIssue);
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
      setInitialIssue(tasks.filter((item) => item.id == idIssue)[0]);
      setShowIssue(true);
    }
  };

  const handleCloseModal = (value?: boolean) => {
    setShowIssue(value!);
  };

  const handelAddIssue = (props: any) => {
    let newTasks: IIssue[] = [];
    if (!Object.keys(initialIssue).length) {
      const idIssue = (+new Date()).toString(16);
      const newIssue = {
        priority: 'Low',
        ...props,
        id: idIssue,
        isChecked: tasks.length === 0 ? true : false,
        mark: null,
      };
      newTasks = [...tasks, newIssue];
    } else {
      newTasks = tasks.map((item) =>
        item.id === initialIssue.id ? { ...item, ...props } : item
      );
    }

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

  const handleNextIssye = () => {
    const indCheck = tasks.findIndex((item) => item.isChecked);
    const indNewCheck = indCheck + 1 === tasks.length ? 0 : indCheck + 1;
    const newTasks = tasks.map((item, index) =>
      index === indNewCheck
        ? { ...item, isChecked: true }
        : { ...item, isChecked: false }
    );
    const data = {
      id,
      issues: newTasks,
      method: 'correct-issues',
    };
    socket!.send(JSON.stringify(data));

    const dataRound = {
      id,
      roundStatus: ERoundStatus.start,
      method: 'set-round-status',
    };
    socket!.send(JSON.stringify(dataRound));
  };

  const handleRemoveMember = (idUser: string) => {
    if (dealerId === myId) {
      const data = {
        id,
        exitUserId: idUser,
        method: 'exit-from-game',
      };
      socket!.send(JSON.stringify(data));
    } else {
      const data = {
        id,
        userId: myId,
        delUserId: idUser,
        method: 'del-user',
      };
      socket!.send(JSON.stringify(data));
    }
  };

  const actionKickButton = (value: boolean) => {
    const data = {
      id,
      userId: myId,
      isAgree: value,
      method: 'access-del-user',
    };
    socket!.send(JSON.stringify(data));
    setKickPlayer(false);
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
    handleNextIssye,
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
    initialIssuesValue: initialIssue,
    kickPlayer,
    actionKickButton,
    delUser,
    handleRemoveMember,
  };

  return <Game {...propsGme} />;
};
