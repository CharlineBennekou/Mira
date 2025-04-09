import { configureStore } from '@reduxjs/toolkit';
import challengeReducer from './challengesSlice';
import piecesReducer from './piecesSlice';

export const store = configureStore({
  reducer: {
    challenge: challengeReducer,
    pieces: piecesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
