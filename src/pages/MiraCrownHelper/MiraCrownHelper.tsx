// src/pages/MiraCrownHelper.tsx
import React from 'react';
import ChallengeSelect from './components/ChallengeSelect';
import PieceSelector from './components/PieceSelectors';



const MiraCrownHelper = () => {
  return (
    <div>
      <h2>Mira Crown Helper Page</h2>
      <ChallengeSelect /> {/* Display the ChallengeSelect component here */}
      <PieceSelector /> {/* Display the PieceSelector component here */}
    </div>
  );
};

export default MiraCrownHelper;
