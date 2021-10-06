import React from 'react';

import {
  Chat,
  CreateIssue,
  GameData,
  GameSettings,
  Issues,
  Members,
} from '../../components';
import { KickPlayerModal } from '../../components/KickPlayerModal/KickPlayerModal';
import { ILobby } from '../pages.module';
import './Lobby.scss';

export const Lobby: React.FC<ILobby> = ({
  myId,
  dealerId,
  isDealer = true,
  members,
  sendMessageChat,
  chatMessage,
  title,
  dealerData,
  editTitle,
  setEditTitle,
  handleEditTitle,
  handleDeleteCard,
  handleStartGame,
  handleCancelGame,
  handleExit,
  cards,
  handleEditCard,
  issues,
  handleIssue,
  handleRemoveMember,
  handleSubmitGameSettings,
  handleChangeMinute,
  handleChangeSeconds,
  initialValuesCopy,
  initialSettings,
  roundTime,
  isTimerEnableState,
  setIsTimerEnable,
  successSettings,
  showIssue,
  handleCloseModal,
  handelAddIssue,
  initialIssuesValue,
  kickPlayer,
  actionKickButton,
  delUser,
}) => (
  <div className="lobby wrapper">
    <main className="lobby-main">
      <GameData
        isDealer={isDealer}
        title={title}
        dealerData={dealerData}
        editTitle={editTitle}
        setEditTitle={setEditTitle}
        handleEditTitle={handleEditTitle}
        handleStartGame={handleStartGame}
        handleCancelGame={handleCancelGame}
        handleExit={handleExit}
        initialValues={initialValuesCopy}
      />
      <Members
        dealerId={dealerId}
        myId={myId}
        members={members}
        handleRemoveMember={handleRemoveMember}
      />
      {isDealer && (
        <>
          <Issues
            issues={issues}
            handleIssue={handleIssue}
            isDealer={isDealer}
          />
          <GameSettings
            cardsValues={cards}
            handleEditCard={handleEditCard}
            handleDeleteCard={handleDeleteCard}
            onSubmit={handleSubmitGameSettings}
            handleChangeMinute={handleChangeMinute}
            handleChangeSeconds={handleChangeSeconds}
            initialValues={initialSettings}
            roundTime={roundTime}
            isTimerEnableState={isTimerEnableState}
            setIsTimerEnable={setIsTimerEnable}
            successSettings={successSettings}
          />
        </>
      )}
    </main>
    <aside className="lobby-chat">
      <Chat
        dealerId={dealerId}
        myId={myId}
        onSubmit={sendMessageChat}
        chatMessage={chatMessage}
        members={members}
        handleRemoveMember={handleRemoveMember}
      />
    </aside>
    {showIssue && (
      <CreateIssue
        handleCloseModal={handleCloseModal}
        onSubmit={handelAddIssue}
        initialValues={initialIssuesValue}
      />
    )}
    {kickPlayer && delUser && (
      <KickPlayerModal
        playerName={delUser.delUser}
        actionKickButton={actionKickButton}
        authorKick={delUser.deleterUserId}
        members={members}
      />
    )}
  </div>
);

export default Lobby;
