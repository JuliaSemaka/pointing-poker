import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import 'antd/dist/antd.css';
import './App.scss';
import { Routes } from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
