import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addChatMessage } from '../actions/chat';
import {
  addCard,
  enterTheGame,
  setTitle,
  setGameStatus,
  setMarksCurrentTask,
  setRoundStatus,
} from '../actions/game';
import { addMyId, addWebSocket } from '../actions/main';

export const useWebSocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = new WebSocket('ws://obscure-wave-90492.herokuapp.com/');
    // const socket = new WebSocket('ws://localhost:5000/');
    dispatch(addWebSocket(socket));
    socket.onopen = () => {
      console.log('Подключение установлено');
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.method) {
          switch (data.method) {
            case 'connection':
              console.log(data.id);
              dispatch(enterTheGame(data));
              break;
            case 'set-title':
              dispatch(setTitle(data.title));
              break;
            case 'change-cards':
              dispatch(addCard(data.cards));
              break;
            case 'add-user':
              console.log(data);
              dispatch(enterTheGame(data));
              break;
            case 'set-game-status':
              dispatch(setGameStatus(data.gameStatus));
              break;
            case 'set-round-status':
              dispatch(setRoundStatus(data.roundStatus));
              break;
            case 'set-mark-current-task':
              dispatch(setMarksCurrentTask(data.marksCurrentTask));
              break;
            //     case 'add-user':
            //       console.log('userId: ', userId);
            //       console.log(data);
            //       if (userId === null) {
            //         setUserId(data.users[data.users.length - 1].id);
            //       }
            //       break;
            //     case 'del-user':
            //       console.log('userId: ', userId);
            //       console.log(data);
            //       setSessionId(null);
            //       sock.onclose = function () {
            //         console.log('WebSocket is closed now.');
            //       };
            //       break;
            case 'add-message':
              dispatch(
                addChatMessage({ idUser: data.idUser, message: data.message })
              );
              break;
          }
        }
      };
    };
  }, []);
};
