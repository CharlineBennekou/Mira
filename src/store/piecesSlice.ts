import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Piece } from '../types/Piece';

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
      const { slot, piece } = action.payload;

      //converting the json piece to a Piece object
      const hydratedPiece = new Piece(
        piece.name,
        piece.set,
        piece.slot,
        piece.mainstat,
        piece.fresh,
        piece.sweet,
        piece.cool,
        piece.sexy,
        piece.elegant,
        piece.tags
      );

      hydratedPiece.updateStats(0); // Ensure level 0 stats are set

      state[slot] = { piece: hydratedPiece, level: 0 };
    },

    setPieceLevel(state, action: PayloadAction<{ slot: string; level: number }>) {
      const { slot, level } = action.payload;
      if (state[slot]) {
        state[slot].level = level;
        state[slot].piece.updateStats(level);
      }
    },
  },
});

export const { setSelectedPiece, setPieceLevel } = piecesSlice.actions;
export default piecesSlice.reducer;
