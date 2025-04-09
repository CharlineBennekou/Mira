import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { challenges } from '../pages/MiraCrownHelper/components/mockData';
import { Challenge } from '../types/Challenge'; // not used

const initialState = {
  selectedChallenge: challenges[0],
};

const challengeSlice = createSlice({
  name: 'challenge',
  initialState,
  reducers: {
    setSelectedChallenge(state, action: PayloadAction<string>) {
      const selected = challenges.find(c => c.id === action.payload);
      if (selected) state.selectedChallenge = selected;
    },
  },
});

export const { setSelectedChallenge } = challengeSlice.actions;
export default challengeSlice.reducer;
