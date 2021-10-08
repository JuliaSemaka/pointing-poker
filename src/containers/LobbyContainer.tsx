import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from 'redux-form';
import { useHistory } from 'react-router-dom';

import { EHandleIssue } from '../components/UI/ui.module';
import { Lobby } from '../pages';
import { enterTheGame } from '../store/actions/game';
import { IGameState, IReducer } from '../store/store.module';
import { EGameStatus, IIssue } from '../components/Game/game.module';
import { Spinners } from '../components';
import { THIRTY_SECONDS, ZERO_SECONDS } from '../pages/pages.module';

export const LobbyContainer: React.FC = () => {
  const { socket, myId } = useSelector((state: IReducer) => state.main);
  const game = useSelector((state: IReducer) => state.game);
  const chat = useSelector((state: IReducer) => state.chat);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isTimerEnableState, setIsTimerEnable] = useState(true);
  const [getMinute, handleChangeMinute] = useState(ZERO_SECONDS);
  const [getSeconds, handleChangeSeconds] = useState(THIRTY_SECONDS);
  const [editTitle, setEditTitle] = useState(false);
  const [successSettings, setSuccessSettings] = useState(false);
  const [showIssue, setShowIssue] = useState(false);
  const [initialIssue, setInitialIssue] = useState<IIssue>({} as IIssue);
  const [kickPlayer, setKickPlayer] = useState(false);

  useEffect(() => {
    return () => {
      setIsTimerEnable(true);
      handleChangeMinute(ZERO_SECONDS);
      handleChangeSeconds(THIRTY_SECONDS);
      setEditTitle(false);
      setSuccessSettings(false);
    };
  }, []);
  
  useEffect(() => {
    if (!game?.users?.some((item) => item.id === myId)) {
      dispatch(enterTheGame({} as IGameState));
    }
  }, [game.users]);

  useEffect(() => {
    if (game.gameStatus === EGameStatus.inProgress) {
      history.push('/game');
    } else if (!game.gameStatus || game.gameStatus === EGameStatus.closed) {
      history.push('/');
    }
  }, [game.gameStatus]);

  useEffect(() => {
    if (game.delUser !== null && game.delUser?.delUser !== myId) {
      setKickPlayer(true);
    } else {
      setKickPlayer(false);
    }
  }, [game.delUser]);

  if (Object.keys(game).length === 0 || !myId) {
    return (
      <>
        <Spinners />
      </>
    );
  }

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
  } = game;

  const {
    isPlayer,
    isChangeEnable,
    isTurnAuto,
    isLetAuto,
    cardsSet,
    scoreType,
    minute,
    seconds,
    isTimerEnable,
  } = settings;

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

  const sendMessageChat = ({ chatMessage }: any) => {
    dispatch(reset('chat'));
    const message = {
      id: id,
      idUser: myId,
      message: chatMessage,
      method: 'add-message',
    };
    socket!.send(JSON.stringify(message));
  };

  const initialValuesCopy = { copyId: id };

  const initialSettings = {
    isPlayer,
    isChangeEnable,
    isTurnAuto,
    isLetAuto,
    cardsSet,
    scoreType,
  };

  const handleStartGame = () => {
    const data = {
      id,
      gameStatus: EGameStatus.inProgress,
      method: 'set-game-status',
    };
    socket!.send(JSON.stringify(data));
  };

  const handleCancelGame = () => {
    const data = {
      id,
      gameStatus: EGameStatus.closed,
      method: 'set-game-status',
    };
    socket!.send(JSON.stringify(data));
  };

  const handleSubmitGameSettings = (props: any) => {
    setSuccessSettings(true);
    const newSettings = {
      ...props,
      isTimerEnable: isTimerEnableState,
      minute: getMinute,
      seconds: getSeconds,
    };
    console.log('newSettings', newSettings);
    const data = {
      id,
      newSettings,
      method: 'set-settings',
    };
    socket!.send(JSON.stringify(data));
    setTimeout(() => {
      setSuccessSettings(false);
    }, 3000);
  };

  const roundTime = {
    minute: getMinute,
    seconds: getSeconds,
  };

  const handleEditTitle = (value: string) => {
    const data = {
      id,
      title: value,
      method: 'set-title',
    };
    socket!.send(JSON.stringify(data));
  };

  const handleEditCard = (value: string, number: string | undefined) => {
    let newCards;
    if (number !== undefined) {
      newCards = cards.map((item) => {
        if (item.number === number) {
          return {
            scoreType: isNaN(+value) ? null : scoreType,
            number: value,
          };
        } else {
          return item;
        }
      });
    } else {
      newCards = cards.concat([
        {
          scoreType: isNaN(+value) ? null : scoreType,
          number: value,
        },
      ]);
    }
    const data = {
      id,
      newCards,
      method: 'change-cards',
    };
    socket!.send(JSON.stringify(data));
  };

  const handleDeleteCard = (number: string) => {
    console.log(number);
    const newCards = cards.filter((item, ind) => {
      if (item.number !== number) {
        return item;
      }
    });
    console.log(newCards);
    const data = {
      id,
      newCards,
      method: 'change-cards',
    };
    socket!.send(JSON.stringify(data));
  };

  const handleExit = () => {
    const data = {
      id,
      exitUserId: myId,
      method: 'exit-from-game',
    };
    socket!.send(JSON.stringify(data));
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

  const handleIssue = (value: EHandleIssue, idIssue?: string) => {
    if (value === EHandleIssue.add) {
      setInitialIssue({} as IIssue);
      setShowIssue(true);
    } else if (value === EHandleIssue.delete) {
      const newTasks = tasks.filter((item) => item.id !== idIssue);
      const data = {
        id,
        issues: newTasks,
        method: 'correct-issues',
      };
      socket!.send(JSON.stringify(data));
    } else if (value === EHandleIssue.edit || value === EHandleIssue.show) {
      setInitialIssue(tasks.filter((item) => item.id == idIssue)[0]);
      setShowIssue(true);
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

  const propsDealer = {
    myId,
    dealerId,
    members: users,
    sendMessageChat,
    chatMessage: chat,
    isDealer: dealerId === myId,
    title,
    dealerData: users.find(({ id }) => id === dealerId)!,
    editTitle,
    setEditTitle,
    handleEditTitle,
    handleDeleteCard,
    handleStartGame,
    handleCancelGame,
    handleExit,
    cards,
    handleEditCard,
    issues: tasks,
    handleIssue,
    handleRemoveMember,
    handleSubmitGameSettings,
    handleChangeMinute,
    handleChangeSeconds,
    initialValuesCopy,
    initialSettings,
    roundTime,
    isTimerEnableState,
    setIsTimerEnable,
    successSettings,
    showIssue,
    handleCloseModal,
    handelAddIssue,
    initialIssuesValue: initialIssue,
    kickPlayer,
    actionKickButton,
    delUser,
  };

  return <>{myId && <Lobby {...propsDealer} />}</>;
};
