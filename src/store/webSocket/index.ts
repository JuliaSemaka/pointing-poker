import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addGame, addMyId, addWebSocket } from '../actions/main';

export const useWebSocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:5000/');
    dispatch(addWebSocket(socket));
    socket.onopen = () => {
      console.log('Подключение установлено');
      const id = (+new Date()).toString(16);
      addMyId(id);

      const userData = {
        firstName: 'July',
        myId: id,
        lastName: 'Yatsko',
        jobTitle: 'web',
        image: '',
        player: 'diller',
        title: 'Title 123456',
        method: 'connection',
      };
      socket.send(JSON.stringify(userData));
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log(data);

        if (data.id) {
          switch (data.method) {
            case 'connection':
              console.log(data);
              dispatch(addGame(data));
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
            //     case 'add-message':
            //       setChat((pref) => pref.concat({ idUser: data.idUser, message: data.message }));
            //       break;
          }
        }
      };
    };
  }, []);
};
