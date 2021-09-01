import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes';
import 'normalize.css';
import 'antd/dist/antd.css';
import './App.scss';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
