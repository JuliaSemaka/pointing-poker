import React from 'react';

import {
  Chat,
  GameData,
  GameSettings,
  Issues,
  Members,
} from '../../components';
import './Lobby.scss';

export const Lobby: React.FC = () => (
  <div className="lobby wrapper">
    <main className="lobby-main">
      <GameData />
      <Members />
      <Issues />
      <GameSettings />
    </main>
    <aside className="lobby-chat">
      <Chat />
    </aside>
  </div>
);

export default Lobby;
