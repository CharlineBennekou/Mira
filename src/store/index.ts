import { configureStore } from '@reduxjs/toolkit';
import challengeReducer from './challengesSlice';
import piecesReducer from './piecesSlice';
import { piecesApi } from './piecesApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    challenge: challengeReducer,
    pieces: piecesReducer,
    // piecesAPI reducer
    [piecesApi.reducerPath]: piecesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(piecesApi.middleware),
});

// Enables refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
