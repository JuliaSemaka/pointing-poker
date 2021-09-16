import React from 'react';
import { MemberCard } from '../../UI/Cards/MemberCard/MemberCard';

export const Members: React.FC = () => {
  const arrMembers = new Array(8).fill(1);

  return (
    <div className="lobby-item">
      <div className="lobby-item__title">
        <h3 className="text text-ruda">Members:</h3>
      </div>
      <div className="lobby-item__wrap">
        {arrMembers.map((item, index) => (
          <MemberCard
            key={index}
            firstName="Ivan"
            lastName="Serepin"
            position="lead"
            isRemove={true}
          />
        ))}
      </div>
    </div>
  );
};
