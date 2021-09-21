import React from 'react';
import { IAvatar } from '../ui.module';

import unknownUser from '../../../assets/images/unknown.jpg';
import './Avatar.scss';

export const Avatar: React.FC<IAvatar> = ({
  initials = null,
  image = null,
}) => (
  <div className="initials">
    {image ? (
      <img src={image} alt="avatar" />
    ) : initials ? (
      <div className="text">{initials}</div>
    ) : (
      <img src={unknownUser} alt="avatar" />
    )}
  </div>
);
