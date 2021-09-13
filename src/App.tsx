import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import { Routes } from './routes';
import 'normalize.css';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
