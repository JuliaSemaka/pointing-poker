import React from 'react';

import { Avatar } from '../../Avatar/Avatar';
import { IMemberCard } from '../../ui.module';
import '../Cards.scss';
import Remove from '../../../../assets/images/remove-user.svg';

export const MemberCard: React.FC<IMemberCard> = ({
  id = '',
  firstName = '',
  lastName = '',
  position = '',
  image = null,
  isMyCard = false,
  isRemove = false,
  isSmall = false,
  handleRemoveMember,
}) => {
  const cardAvatar = image ? (
    <Avatar image={image} />
  ) : (
    <Avatar initials={firstName?.slice(0, 1) + lastName?.slice(0, 1)} />
  );

  return (
    <div className={`card ${isSmall && 'card-small'}`}>
      {cardAvatar}
      <div className={`card-data ${isSmall && 'card-data__small'}`}>
        {isMyCard && (
          <p className="text text-small-uppercase card-data__you">its you</p>
        )}
        <p className="text card-data__name">
          {firstName} {lastName}
        </p>
        <p className="text text-position card-data__position">{position}</p>
      </div>
      {isRemove && (
        <img
          className="card-cred"
          src={Remove}
          alt="remove"
          onClick={() => handleRemoveMember!(id)}
        />
      )}
    </div>
  );
};
