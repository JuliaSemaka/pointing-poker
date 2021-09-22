import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from 'redux-form';

import { EHandleIssue } from '../components/UI/ui.module';
import { Lobby } from '../pages';
import { IReducer } from '../store/store.module';

export const LobbyContainer: React.FC = () => {
  const { socket, game, myId } = useSelector((state: IReducer) => state.main);
  const chat = useSelector((state: IReducer) => state.chat);
  const dispatch = useDispatch();

  if (!game || !myId) {
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
  } = game!;

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

  const propsDealer = {
    myId,
    dillerId,
    members: users,
    sendMessageChat,
    chatMessage: chat,
    isDealer: dillerId === myId,
    title,
    dealerData: users.find(({ id }) => id === dillerId)!,
    handleEditTitle: funcTest,
    handleCopy: funcTest,
    handleStartGame: funcTest,
    handleCancelGame: funcTest,
    handleExit: funcTest,
    cardsValues: cards,
    handleAddCard: funcTest,
    handleEditCard: funcTest,
    issues: tasks,
    handleIssue: funcTestParam,
    handleRemoveMember: funcTest,
    handleSubmitGameSettings: funcTest,
    handleChangeMinute: funcTest,
    handleChangeSeconds: funcTest,
    initialValuesCopy,
  };

  return <>{game && <Lobby {...propsDealer} />}</>;
};
