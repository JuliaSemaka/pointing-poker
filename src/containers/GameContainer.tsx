import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Spinners } from '../components';
import { ERole } from '../components/components.module';

import {
  EGameStatus,
  ERoundStatus,
  IIssue,
  IMarks,
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
    if (
      dealerId === myId &&
      marksCurrentTask?.find(
        ({ idTask }) => idTask === tasks?.find(({ isChecked }) => isChecked)?.id
      )?.marks.length &&
      roundStatus === ERoundStatus.finish
    ) {
      const idIssue = tasks.find((item) => item.isChecked)?.id;
      const indexMark = marksCurrentTask.findIndex(
        (item) => item.idTask === idIssue
      );
      const mark = marksCurrentTask[indexMark].marks.reduce(
        (res, item) =>
          item.mark !== 'Unknown' ? res + Number(item.mark) : res,
        0
      );
      const len = marksCurrentTask[indexMark].marks.filter(
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
    }
  }, [roundStatus, marksCurrentTask]);

  useEffect(() => {
    if (delUser !== null && delUser?.delUser !== myId) {
      setKickPlayer(true);
    } else {
      setKickPlayer(false);
    }
  }, [delUser]);

  useEffect(() => {
    const checkedTaskId = tasks?.find(({ isChecked }) => isChecked)?.id;
    if (
      checkedTaskId &&
      marksCurrentTask?.length &&
      marksCurrentTask?.find(({ idTask }) => idTask === checkedTaskId)?.marks &&
      marksCurrentTask?.find(({ idTask }) => idTask === checkedTaskId)?.marks
        .length ===
        users?.filter(
          (item) =>
            item.role === ERole.player ||
            (item.role === ERole.dealer && settings.isPlayer)
        ).length
    ) {
      const data = {
        id,
        roundStatus: ERoundStatus.finish,
        method: 'set-round-status',
      };
      socket!.send(JSON.stringify(data));
    }
  }, [marksCurrentTask]);

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

  const {
    isTimerEnable,
    minute,
    seconds,
    isPlayer,
    isTurnAuto,
    isChangeEnable,
  } = settings;

  const handleRunRound = () => {
    const data = {
      id,
      roundStatus: ERoundStatus.inProgress,
      method: 'set-round-status',
    };
    socket!.send(JSON.stringify(data));

    const idIssue = tasks.find((item) => item.isChecked)?.id;
    const newMarksCurrentTask = marksCurrentTask.map((item) =>
      item.idTask === idIssue ? { idTask: idIssue, marks: [] } : item
    );
    const dataMark = {
      id,
      marksCurrentTask: newMarksCurrentTask,
      method: 'set-mark-current-task',
    };
    socket!.send(JSON.stringify(dataMark));
  };

  const handleRestartRound = () => {
    const newTasks = tasks.map((item) =>
      item.isChecked ? { ...item, mark: null } : item
    );
    const correctIssues = {
      id,
      issues: newTasks,
      method: 'correct-issues',
    };
    socket!.send(JSON.stringify(correctIssues));
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

  const countPercentTask = (
    number: string | null,
    id?: string
  ): string | undefined => {
    if (!marksCurrentTask.length) {
      return;
    }

    if (id !== undefined) {
      return `${(
        (marksCurrentTask
          .find(({ idTask }) => idTask === id)!
          .marks.filter(({ mark }) => mark === number).length /
          marksCurrentTask.length) *
        100
      ).toFixed(1)}%`;
    }

    const idIssue = tasks.find((item) => item.isChecked)?.id;
    const indexMark = marksCurrentTask.findIndex(
      (item) => item.idTask === idIssue
    );

    return `${(
      (marksCurrentTask[indexMark].marks.filter(({ mark }) => mark === number)
        .length /
        marksCurrentTask.length) *
      100
    ).toFixed(1)}%`;
  };

  const handleClickCard = (number: string, scoreType: string | null) => {
    const idIssue = tasks.find((item) => item.isChecked)?.id;
    const indexMark = marksCurrentTask.findIndex(
      (item) => item.idTask === idIssue
    );

    const mark: IMarks = {
      idUser: myId!,
      mark: number,
      scoreType,
    };

    const ind = marksCurrentTask[indexMark].marks.findIndex(
      (item) => item.idUser === myId
    );
    let newArr: IMarks[] = [];
    if (ind === -1) {
      newArr = marksCurrentTask[indexMark].marks.concat([mark]);
    } else {
      newArr = marksCurrentTask[indexMark].marks.map((item, index) =>
        index === ind ? mark : item
      );
    }

    const newMarksCurrentTask = marksCurrentTask.map((item) =>
      item.idTask === idIssue ? { idTask: idIssue, marks: newArr } : item
    );

    const data = {
      id,
      marksCurrentTask: newMarksCurrentTask,
      method: 'set-mark-current-task',
    };

    socket!.send(JSON.stringify(data));
  };

  const handleGameIssue = (value: EHandleIssue, idIssue?: string) => {
    if (value === EHandleIssue.add) {
      setInitialIssue({} as IIssue);
      setShowIssue(true);
    } else if (value === EHandleIssue.remove) {
      const newTasks = tasks.filter(({ id }) => id !== idIssue);
      const newMarksCurrentTask = marksCurrentTask.filter(
        ({ idTask }) => idTask !== idIssue
      );

      const data = {
        id,
        issues: newTasks,
        marksCurrentTask: newMarksCurrentTask,
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
    let newMarksCurrentTask: IMarksCurrentTask[] | undefined = undefined;
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
      newMarksCurrentTask = [
        ...marksCurrentTask,
        { idTask: idIssue, marks: [] as IMarks[] },
      ];
    } else {
      newTasks = tasks.map((item) =>
        item.id === initialIssue.id ? { ...item, ...props } : item
      );
    }
    const data = {
      id,
      issues: newTasks,
      marksCurrentTask: newMarksCurrentTask,
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

    const dataRound = {
      id,
      roundStatus: ERoundStatus.start,
      method: 'set-round-status',
    };
    socket!.send(JSON.stringify(dataRound));
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
    isChangeEnable,
  };

  return <Game {...propsGme} />;
};
