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

export const Lobby: React.FC<ILobby> = ({ isDealer = true, handleSubmit, members, sendMessageChat }) => (
  <div className="lobby wrapper">
    <main className="lobby-main">
      <GameData isDealer={isDealer} handleSubmit={handleSubmit} />
      <Members members={members} />
      {isDealer && (
        <>
          <Issues />
          <GameSettings />
        </>
      )}
    </main>
    <aside className="lobby-chat">
      <Chat sendMessageChat={sendMessageChat} />
    </aside>
  </div>
);

export default Lobby;
