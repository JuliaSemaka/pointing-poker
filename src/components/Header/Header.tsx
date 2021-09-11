import React from 'react';

import logo from '../../assets/images/logo.png';
import chat from '../../assets/images/chat.svg';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-second-line">
        <div className="header-logo">
          <img src={logo} alt="logo" />
          <img src={chat} alt="chat" className="header-chat" />
        </div>
      </div>
    </div>
  );
};

export default Header;
