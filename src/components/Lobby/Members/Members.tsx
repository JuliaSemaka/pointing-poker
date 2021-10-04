import React from 'react';
import { MemberCard } from '../../UI/Cards/MemberCard/MemberCard';
import { IMembers } from '../../UI/ui.module';

export const Members: React.FC<IMembers> = ({
  myId,
  dealerId,
  members,
  handleRemoveMember,
}) => (
  <div className="lobby-item">
    <div className="lobby-item__title">
      <h3 className="text text-ruda">Members:</h3>
    </div>
    <div className="lobby-item__wrap">
      {!members.length && <p className="text">Members is empty</p>}
      {members.map(({ jobTitle, lastName, firstName, image, id }) => (
        <MemberCard
          key={id}
          id={id}
          firstName={firstName}
          lastName={lastName}
          position={jobTitle}
          image={image}
          isRemove={id !== dealerId}
          isMyCard={id === myId}
          handleRemoveMember={handleRemoveMember}
        />
      ))}
    </div>
  </div>
);
