import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { reset } from 'redux-form';
import ConnectToLobby from '../components/ConnectToLobby/ConnectToLobby';
import { IReducer } from '../store/store.module';
import { addMyId, setDenied, setThereId } from '../store/actions/main';
import { MainPage } from '../pages';
import { ERole } from '../components/components.module';
import { EGameStatus } from '../components/Game/game.module';
import { Spinners } from '../components';

export const MainPageContainer: React.FC = () => {
  const { socket, denied, myId, confirmedUser, thereId } = useSelector(
    (state: IReducer) => state.main
  );
  const form = useSelector((state: IReducer) => state.form);
  const game = useSelector((state: IReducer) => state.game);
  const history = useHistory();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isObserver, setIsObserver] = useState(false);
  const [isDealler, setIsDealler] = useState(true);
  const [gameId, setGameId] = useState(null);
  const [avatar, setAvatar] = useState('');
  const [isLoader, setIsLoader] = useState(false);
  const [isDeniedAccess, setDeniedAccess] = useState(false);
  const [thereIsId, setThereIsId] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoader(false);
    if (game?.gameStatus === EGameStatus.created) {
      history.push('/lobby');
    } else if (game?.gameStatus === EGameStatus.inProgress) {
      history.push('/game');
    }
  }, [game]);

  useEffect(() => {
    if (denied && myId === denied.myId) {
      setIsLoader(false);
      dispatch(setDenied(null));
      setDeniedAccess(true);
    }
  }, [denied]);

  useEffect(() => {
    if (thereId) {
      setIsDealler(false);
      setGameId(form.connectToLobby.values.lobbyId);
      handleCloseModal();
      dispatch(setThereId(null));
      setThereIsId(true);
    } else if (thereId === false) {
      setThereIsId(false);
      dispatch(setThereId(null));
    }
  }, [thereId]);

  if (isDeniedAccess) {
    return (
      <div className="access text-ruda text-ruda-big">
        You are denied access.
      </div>
    );
  }

  if (confirmedUser) {
    return (
      <div className="access">
        <div className=" text-ruda text-ruda-big">
          Wait, the dealer should give you access...
        </div>
        <Spinners />
      </div>
    );
  }

  if (isLoader) {
    return (
      <>
        <Spinners />
      </>
    );
  }

  const onSubmit = () => {
    const id = (+new Date()).toString(16);

    dispatch(addMyId(id));
    const { firstName, lastName, jobPosition, title } =
      form.connectToLobbyModal.values;

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
    socket!.send(JSON.stringify(userData));
    setIsLoader(true);
  };

  const handleStartGame = () => {
    handleCloseModal();
  };
  const handleConnectToLobby = () => {
    console.log(form.connectToLobby.values.lobbyId);
    const data = {
      id: form.connectToLobby.values.lobbyId,
      method: 'there-id',
    };
    socket!.send(JSON.stringify(data));
  };

  const handleClickSwitch = () => {
    setIsObserver((state) => !state);
  };

  const handleCloseModal = () => {
    setIsModalOpened((state) => !state);
  };

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
  };

  const handleUploadImage = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file: File = (event.target.files as FileList)[0];
    uploadFile(file, setAvatar);
  };

  const handleSubmit = () => {
    onSubmit();
    handleCloseModal();
    console.log('Форма отправлена');
  };

  const props = {
    onSubmit: handleConnectToLobby,
    handleStartGame,
    thereIsId,
  };

  const propsModal = {
    title: 'Connect to lobby',
    handleCloseModal,
    onSubmit: handleSubmit,
    handleClickSwitch,
    handleUploadImage,
    avatar,
    isDealler,
  };

  return (
    <>
      <MainPage {...props} />
      {isModalOpened && <ConnectToLobby {...propsModal} />}
    </>
  );
};

export default MainPageContainer;
