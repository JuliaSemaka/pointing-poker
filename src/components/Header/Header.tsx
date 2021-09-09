import { Layout } from 'antd';
import React from 'react';

import logo from './logo.png';
import './Header.css';


export const Header: React.FC = () => {
  return (
    <Layout className="layout">
      <div className="header">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-second-line" />
      </div>
    </Layout>
  )
};

export default Header;
