import React from 'react';
import { MemberCard } from '../../UI/Cards/MemberCard/MemberCard';
import { IMembers } from '../../UI/ui.module';

export const Members: React.FC<IMembers> = ({ members }) => (
  <div className="lobby-item">
    <div className="lobby-item__title">
      <h3 className="text text-ruda">Members:</h3>
    </div>
    <div className="lobby-item__wrap">
      {members.map((item, index) => (
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
