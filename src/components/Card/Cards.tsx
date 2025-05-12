import React, { FC } from 'react';
import CardDefault from './CardDefault';
import CardModifiers from './CardModifiers';
import CardImageActions from './CardImageActions';
import CardHeaderOnlyActions from './CardHeaderOnlyActions';
import CardHeadingHTML from './CardHeadingHTML';
import CardMultipleBodies from './CardMultipleBodies';
import CardPrimaryBodyFill from './CardPrimaryBodyFill';
import CardSelectable from './CardSelectable';
import CardSingleSelectable from './CardSingleSelectable';
import CardWithActions from './CardWithActions'
import CardExpandable from './CardExpandable';

const PfCard: FC = () => {
  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <CardDefault />
      <CardModifiers />
      <CardImageActions />
      <CardHeaderOnlyActions />
      <CardHeadingHTML />
      <CardMultipleBodies />
      <CardPrimaryBodyFill />
      <CardSelectable />
      <CardSingleSelectable />
      <CardWithActions />
      <CardExpandable />
    </div>
  );
};

export default PfCard;