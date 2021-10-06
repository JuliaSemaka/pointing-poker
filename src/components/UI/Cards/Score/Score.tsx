import React, { useEffect, useState } from 'react';

import '../Cards.scss';
import { IScoreCard } from '../../ui.module';
import { ERoundStatus } from '../../../Game/game.module';
import Eyes from '../../../../assets/images/cards/eyes.svg';

export const ScoreCard: React.FC<IScoreCard> = ({
  scoreType = null,
  number = null,
  roundStatus,
  isTurnAuto,
}) => {
  const [showScore, setShowScore] = useState(false);
  useEffect(() => {
    if (roundStatus === ERoundStatus.inProgress) {
      setShowScore(false);
    }
  }, [roundStatus]);

  if (roundStatus === ERoundStatus.finish && isTurnAuto) {
    return (
      <div className="card card-small card-score">
        <p className="text text-ruda">{number ?? 'In progress'}</p>
        <p className="text text-ruda text-uppercase">{scoreType}</p>
      </div>
    );
  }

  if (roundStatus === ERoundStatus.finish && !isTurnAuto) {
    return (
      <div className="card card-small card-score">
        <p className="text text-ruda">
          {showScore && number ? number : 'In progress'}
        </p>
        <p className="text text-ruda text-uppercase">
          {showScore && scoreType ? scoreType : null}
        </p>
        <img
          className="card-cred card-score__create"
          src={Eyes}
          alt="eyes"
          onClick={() => setShowScore((prev) => !prev)}
        />
      </div>
    );
  }

  return (
    <div className="card card-small card-score">
      <p className="text text-ruda">In progress</p>
    </div>
  );
};
