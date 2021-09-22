import React from 'react';

import {
  Chat,
  GameData,
  GameSettings,
  Issues,
  Members,
} from '../../components';
import { ILobby } from '../pages.module';
import './Lobby.scss';

export const Lobby: React.FC<ILobby> = ({
  myId,
  dillerId,
  isDealer = true,
  members,
  sendMessageChat,
  chatMessage,
  title,
  dealerData,
  handleEditTitle,
  handleCopy,
  handleStartGame,
  handleCancelGame,
  handleExit,
  cardsValues,
  handleAddCard,
  handleEditCard,
  issues,
  handleIssue,
  handleRemoveMember,
  handleSubmitGameSettings,
  handleChangeMinute,
  handleChangeSeconds,
  initialValuesCopy,
}) => (
  <div className="lobby wrapper">
    <main className="lobby-main">
      <GameData
        isDealer={isDealer}
        title={title}
        dealerData={dealerData}
        handleEditTitle={handleEditTitle}
        handleCopy={handleCopy}
        handleStartGame={handleStartGame}
        handleCancelGame={handleCancelGame}
        handleExit={handleExit}
        initialValues={initialValuesCopy}
      />
      <Members
        dillerId={dillerId}
        myId={myId}
        members={members}
        handleRemoveMember={handleRemoveMember}
      />
      {isDealer && (
        <>
          <Issues issues={issues} handleIssue={handleIssue} />
          <GameSettings
            cardsValues={cardsValues}
            handleAddCard={handleAddCard}
            handleEditCard={handleEditCard}
            handleSubmitGameSettings={handleSubmitGameSettings}
            handleChangeMinute={handleChangeMinute}
            handleChangeSeconds={handleChangeSeconds}
          />
        </>
      )}
    </main>
    <aside className="lobby-chat">
      <Chat
        dillerId={dillerId}
        myId={myId}
        onSubmit={sendMessageChat}
        chatMessage={chatMessage}
        members={members}
        handleRemoveMember={handleRemoveMember}
      />
    </aside>
  </div>
);

export default Lobby;
