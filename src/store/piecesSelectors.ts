import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './index'; // Adjust the path based on your project structure

export const selectPiecesState = (state: RootState) => state.pieces;

export const selectTotalStats = createSelector(
  selectPiecesState,
  (pieces) => {
    let totalFresh = 0;
    let totalSweet = 0;
    let totalCool = 0;
    let totalSexy = 0;
    let totalElegant = 0;

    Object.values(pieces).forEach((value) => {
      // Skip any non-slot properties (if you add any later)
      if (!value?.piece) return;

      totalFresh += value.piece.fresh;
      totalSweet += value.piece.sweet;
      totalCool += value.piece.cool;
      totalSexy += value.piece.sexy;
      totalElegant += value.piece.elegant;
    });

    return {
      totalFresh,
      totalSweet,
      totalCool,
      totalSexy,
      totalElegant,
    };
  }
);
