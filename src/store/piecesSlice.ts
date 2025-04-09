import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Piece } from '../../types/Piece';

interface SelectedPiece {
  piece: Piece;
  level: number;
}

type PieceState = {
  [slot: string]: SelectedPiece;
};

const initialState: PieceState = {};

const piecesSlice = createSlice({
  name: 'pieces',
  initialState,
  reducers: {
    setSelectedPiece(state, action: PayloadAction<{ slot: string; piece: Piece }>) {
      state[action.payload.slot] = { piece: action.payload.piece, level: 0 };
    },
    setPieceLevel(state, action: PayloadAction<{ slot: string; level: number }>) {
      if (state[action.payload.slot]) {
        state[action.payload.slot].level = action.payload.level;
        state[action.payload.slot].piece.updateStats(action.payload.level);
      }
    },
  },
});

export const { setSelectedPiece, setPieceLevel } = piecesSlice.actions;
export default piecesSlice.reducer;
