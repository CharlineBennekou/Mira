import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setSelectedChallenge } from '../../../store/challengesSlice';
import { challenges } from './mockData';

const ChallengeSelect = () => {
  const dispatch = useAppDispatch();
  const selectedChallenge = useAppSelector(state => state.challenge.selectedChallenge);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedChallenge(event.target.value));
  };

  return (
    <div>
      <label htmlFor="challengeSelect">Select a Challenge: </label>
      <select
        id="challengeSelect"
        value={selectedChallenge.id}
        onChange={handleSelectChange}
      >
        {challenges.map((challenge) => (
          <option key={challenge.id} value={challenge.id}>
            {challenge.name}
          </option>
        ))}
      </select>

      <div className="challenge-info">
        <h3>{selectedChallenge.name}</h3>
        <p><strong>Primary Stat:</strong> {selectedChallenge.primarystat}</p>
        <p><strong>Secondary Stat:</strong> {selectedChallenge.secondarystat || 'N/A'}</p>
        <p><strong>Tag:</strong> {selectedChallenge.tag || 'No tag'}</p>
        <p><strong>Notes:</strong> {selectedChallenge.notes}</p>
      </div>
    </div>
  );
};

export default ChallengeSelect;
