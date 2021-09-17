import React from 'react';

import {
  Chat,
  GameData,
  GameSettings,
  Issues,
  Members,
} from '../../components';
import { ILobby } from '../../components/UI/ui.module';
import './Lobby.scss';

export const Lobby: React.FC<ILobby> = ({
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
      />
      <Members members={members} handleRemoveMember={handleRemoveMember} />
      {isDealer && (
        <>
          <Issues issues={issues} handleIssue={handleIssue} />
          <GameSettings
            cardsValues={cardsValues}
            handleAddCard={handleAddCard}
            handleEditCard={handleEditCard}
          />
        </>
      )}
    </main>
    <aside className="lobby-chat">
      <Chat sendMessageChat={sendMessageChat} chatMessage={chatMessage} handleRemoveMember={handleRemoveMember} />
    </aside>
  </div>
);

export default Lobby;
