import React from 'react';
import { MemberCard } from '../../UI/Cards/MemberCard/MemberCard';
import { IMembers } from '../../UI/ui.module';

export const Members: React.FC<IMembers> = ({ members, handleRemoveMember }) => (
  <div className="lobby-item">
    <div className="lobby-item__title">
      <h3 className="text text-ruda">Members:</h3>
    </div>
    <div className="lobby-item__wrap">
      {!members.length && <p className="text">Members is empty</p>}
      {members.map((item) => (
        <MemberCard
          key={item.id}
          firstName={item.firstName}
          lastName={item.lastName}
          position={item.jobTitle}
          isRemove={true}
          handleRemoveMember={handleRemoveMember}
        />
      ))}
    </div>
  </div>
);
