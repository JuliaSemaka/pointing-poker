import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from 'redux-form';
import { useHistory } from 'react-router-dom';

import { EHandleIssue } from '../components/UI/ui.module';
import { Lobby } from '../pages';
import { changeSettings } from '../store/actions/game';
import { IReducer } from '../store/store.module';

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

  if (Object.keys(game).length === 0 || !myId) {
    return <></>;
  }

  const {
    cards,
    delUser,
    dillerId,
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
    console.log(chatMessage);
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
    history.push('/game');
  };

  const handleSubmitGameSettings = (props: any) => {
    setSuccessSettings(true);
    const newSettings = {
      ...props,
      isTimerEnable: isTimerEnableState,
      minute: getMinute,
      seconds: getSeconds,
    };
    dispatch(changeSettings(newSettings));
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

  const propsDealer = {
    myId,
    dillerId,
    members: users,
    sendMessageChat,
    chatMessage: chat,
    isDealer: dillerId === myId,
    title,
    dealerData: users.find(({ id }) => id === dillerId)!,
    editTitle,
    setEditTitle,
    handleEditTitle,
    handleStartGame,
    handleCancelGame: funcTest,
    handleExit: funcTest,
    cardsValues: cards,
    handleAddCard: funcTest,
    handleEditCard: funcTest,
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
