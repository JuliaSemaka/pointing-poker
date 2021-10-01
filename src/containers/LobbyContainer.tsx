import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from 'redux-form';
import { useHistory } from 'react-router-dom';

import { EHandleIssue } from '../components/UI/ui.module';
import { Lobby } from '../pages';
import { changeSettings, enterTheGame } from '../store/actions/game';
import { IGameState, IReducer } from '../store/store.module';
import { EGameStatus } from '../components/Game/game.module';
import { Spinners } from '../components';

export const LobbyContainer: React.FC = () => {
  const { socket, myId } = useSelector((state: IReducer) => state.main);
  const game = useSelector((state: IReducer) => state.game);
  const chat = useSelector((state: IReducer) => state.chat);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isTimerEnableState, setIsTimerEnable] = useState(false);
  const [getMinute, handleChangeMinute] = useState('0');
  const [getSeconds, handleChangeSeconds] = useState('0');
  const [editTitle, setEditTitle] = useState(false);
  const [successSettings, setSuccessSettings] = useState(false);

  useEffect(() => {
    return () => {
      setIsTimerEnable(false);
      handleChangeMinute('0');
      handleChangeSeconds('0');
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

  const funcTest = () => {
    console.log(1);
  };

  const funcTestParam = (value: EHandleIssue) => {
    console.log(value);
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
    handleIssue: funcTestParam,
    handleRemoveMember: funcTest,
    handleSubmitGameSettings,
    handleChangeMinute,
    handleChangeSeconds,
    initialValuesCopy,
    initialSettings,
    roundTime,
    isTimerEnableState,
    setIsTimerEnable,
    successSettings,
  };

  return <>{myId && <Lobby {...propsDealer} />}</>;
};
