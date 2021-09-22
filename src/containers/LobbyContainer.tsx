import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { EHandleIssue } from '../components/UI/ui.module';
import { Lobby } from '../pages';
import { IReducer } from '../store/store.module';

export const LobbyContainer: React.FC = () => {
  const { socket, game } = useSelector((state: IReducer) => state.main);
  const chat = useSelector((state: IReducer) => state.chat);
  const dispatch = useDispatch();

  if (!game) {
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

  const propsDealer = {
    members: users,
    sendMessageChat: funcTest,
    chatMessage: chat,
    isDealer: true,
    title:
      'Какое название???????????????????????????????????????????????????????????????????',
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
  };

  return <div>{game && <Lobby {...propsDealer} />}</div>;
};
