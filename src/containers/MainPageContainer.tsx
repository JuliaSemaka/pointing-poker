import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from 'redux-form';
import ConnectToLobby from '../components/ConnectToLobby/ConnectToLobby';

import { EHandleIssue } from '../components/UI/ui.module';
import { MainPage } from '../pages';
import { addGame, addMyId, addWebSocket } from '../store/actions/main';
import { IReducer } from '../store/store.module';

export const MainPageContainer: React.FC = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isObserver, setIsObserver] = useState(false);
  const [avatar, setAvatar] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = new WebSocket('ws://obscure-wave-90492.herokuapp.com/');
    // const socket = new WebSocket('ws://localhost:5000/');
    dispatch(addWebSocket(socket));
    socket.onopen = () => {
      console.log('Подключение установлено');
      const id = (+new Date()).toString(16);
      dispatch(addMyId(id));

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
            case 'add-message':
              // dispatch(
              //   addChatMessage({ idUser: data.idUser, message: data.message })
              // );
              break;
          }
        }
      };
    };
  }, []);

  const onSubmit = () => {
    console.log('Подключение к игре')
  }

  const handleStartGame = () => {
    handleCloseModal();
    console.log('Старт игры')
  }

  const props = {
    onSubmit,
    handleStartGame
  }

  const handleClickSwitch = () => {
    setIsObserver((state) => !state);
  }

  const handleCloseModal = () => {
    setIsModalOpened((state) => !state);
  }

  const uploadFile = (
    file: File,
    setValueState: React.Dispatch<React.SetStateAction<string>>
  ): void => {
    const reader: FileReader = new FileReader();
    reader.onload = () => {
      const res = reader.result as string;
      setValueState(res);
    };
    reader.readAsDataURL(file);
  }

  const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file: File = (event.target.files as FileList)[0];
    uploadFile(file, setAvatar);
  }

  const handleSubmit = (event: any) => {
    onSubmit();
    console.log('Форма отправлена')
  }

  const propsModal = {
    title: 'Connect to lobby',
    handleCloseModal: handleCloseModal,
    onSubmit: handleSubmit,
    handleClickSwitch: handleClickSwitch,
    handleUploadImage: handleUploadImage,
    avatar: avatar,
  }

  return (
    <>
      <MainPage {...props} />
      {isModalOpened && (
        <ConnectToLobby
          {...propsModal}
        />
      )}
    </>
  )
};

export default MainPageContainer