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

export const Lobby: React.FC<ILobby> = ({ isDealer = true, handleSubmit }) => (
  <div className="lobby wrapper">
    <main className="lobby-main">
      <GameData isDealer={isDealer} handleSubmit={handleSubmit} />
      <Members />
      {isDealer && (
        <>
          <Issues />
          <GameSettings />
        </>
      )}
    </main>
    <aside className="lobby-chat">
      <Chat />
    </aside>
  </div>
);

export default Lobby;
