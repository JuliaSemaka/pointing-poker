import React from 'react';

import '../Cards.scss';
import { IScoreCard } from '../../ui.module';

export const ScoreCard: React.FC<IScoreCard> = ({
  scoreType = null,
  number = null,
}) => (
  <div className="card card-small card-score">
    <p className="text text-ruda">{number ?? 'In progress'}</p>
    <p className="text text-ruda text-uppercase">{scoreType}</p>
  </div>
);
