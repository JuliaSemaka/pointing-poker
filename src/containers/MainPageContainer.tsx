import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { reset } from 'redux-form';
import ConnectToLobby from '../components/ConnectToLobby/ConnectToLobby';
import { IReducer } from '../store/store.module';
import { addMyId } from '../store/actions/main';
import { MainPage } from '../pages';
import { ERole } from '../components/components.module';

export const MainPageContainer: React.FC = () => {
  const { socket } = useSelector((state: IReducer) => state.main);
  const form = useSelector((state: IReducer) => state.form);
  const history = useHistory();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isObserver, setIsObserver] = useState(false);
  const [isDealler, setIsDealler] = useState(true);
  const [gameId, setGameId] = useState(null)
  const [avatar, setAvatar] = useState('');
  const dispatch = useDispatch();

  const onSubmit = () => {
    const id = (+new Date()).toString(16);

    dispatch(addMyId(id));
    const {
      firstName,
      lastName,
      jobPosition,
      title
     } = form.connectToLobbyModal.values;

    const userData = {
      firstName: firstName,
      myId: id,
      lastName: lastName,
      jobTitle: jobPosition,
      image: avatar,
      player: isDealler ? ERole.dealer : ERole.player,
      title: title,
      id: gameId,
      method: isDealler ? 'connection' : 'add-user',
    };
    console.log(userData);

    socket!.send(JSON.stringify(userData));
    history.push("/lobby")
    console.log('Подключение к игре')
  }

  const handleStartGame = () => {
    handleCloseModal();
  }
  const handleConnectToLobby = () => {
    setIsDealler(false);
    setGameId(form.connectToLobby.values.lobbyId);
    handleCloseModal();
  }

  const props = {
    onSubmit: handleConnectToLobby,
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

  const handleSubmit = () => {
    onSubmit();
    handleCloseModal();
    console.log('Форма отправлена')
  }

  const propsModal = {
    title: 'Connect to lobby',
    handleCloseModal: handleCloseModal,
    onSubmit: handleSubmit,
    handleClickSwitch: handleClickSwitch,
    handleUploadImage: handleUploadImage,
    avatar: avatar,
    isDealler
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
