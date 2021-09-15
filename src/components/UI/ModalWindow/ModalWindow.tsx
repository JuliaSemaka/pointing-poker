import React from 'react';
import { IModalWindow } from '../ui.module';
import './ModalWindow.scss';

export const ModalWindow: React.FC<IModalWindow> = ({
  children,
  handleClick,
}) => (
  <div className="modal" onClick={handleClick}>
    <div
      className="modal-content"
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        e.stopPropagation()
      }
    >
      {children}
    </div>
  </div>
);
