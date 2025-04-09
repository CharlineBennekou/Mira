// src/pages/MiraCrownHelper.tsx
import React from 'react';
import ChallengeSelect from './components/ChallengeSelect';
import PieceSelector from './components/PieceSelectors';
import { mockPieces } from "./components/mockData";
import { Piece } from "../../types/Piece";


const MiraCrownHelper = () => {
// Simplified slots. Updating this later.
const mainSlots = [
  "hair",
  "dress",
  "outerwear",
  "socks",
  "shoes"
];

// Simplified accessory slots. Updating this later.
const accessorySlots = [
  "accessory1",
  "accessory2",
  "accessory3",
  "accessory4",
  "accessory5"];

  const getPiecesBySlot = (slot: string): Piece[] => {
    return mockPieces.filter((p) => p.slot.toLowerCase() === slot.toLowerCase());
  };


  return (
    <div>
      <h2>Mira Crown Helper Page</h2>
      <ChallengeSelect />

      <h3>Main Outfit</h3>
      {mainSlots.map((slot) => (
        <PieceSelector
          key={slot}
          slot={slot}
          pieces={getPiecesBySlot(slot)}
        />
      ))}

      <h3>Accessories</h3>
      {accessorySlots.map((slot, index) => (
        <PieceSelector
          key={slot}
          slot={`Accessory ${index + 1}`}
          pieces={mockPieces.filter((p) => p.slot.toLowerCase().includes("accessory"))}
        />
      ))}
    </div>
  );
};

export default MiraCrownHelper;
