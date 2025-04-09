import React, { useState } from 'react';
import { challenges } from './mockData'; // Import the mock challenges

const ChallengeSelect = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(challenges[0]); // Set the default challenge

  // Handle the change when a user selects a challenge
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const challengeId = event.target.value;
    const selected = challenges.find((challenge) => challenge.id === challengeId);
    if (selected) {
      setSelectedChallenge(selected);
    }
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
