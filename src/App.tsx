import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import './App.scss';
import { Routes } from './routes';
import { useWebSocket } from './store/webSocket';

const App: React.FC = () => {
  useWebSocket();

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
