// src/components/PieceSelectors.tsx
import { useState } from "react";
import { Piece } from "../../../types/Piece";

interface PieceSelectorProps {
  slot: string;
  pieces: Piece[];
}

const PieceSelector = ({ slot, pieces }: PieceSelectorProps) => {
  const [selectedPiece, setSelectedPiece] = useState<Piece>(pieces[0]);
  const [level, setLevel] = useState<number>(0);

  const handlePieceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = pieces.find((piece) => piece.name === event.target.value);
    if (selected) {
      setSelectedPiece(selected);
      setLevel(0); // Reset level when switching pieces
    }
  };

  const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newLevel = parseInt(event.target.value, 10);
    if (isNaN(newLevel) || newLevel < 0 || newLevel > 11) return;
    setLevel(newLevel);
    selectedPiece.updateStats(newLevel);
  };

  return (
    <div>
      <h2>{slot}</h2>
      <select onChange={handlePieceChange} value={selectedPiece.name}>
        {pieces.map((piece) => (
          <option key={piece.name} value={piece.name}>
            {piece.name}
          </option>
        ))}
      </select>
      <div>
        <h3>{selectedPiece.name}</h3>
        <p>Set: {selectedPiece.set}</p>
        <p>Slot: {selectedPiece.slot}</p>
        <p>Main Stat: {selectedPiece.mainstat}</p>
        <p>Fresh: {selectedPiece.fresh.toFixed(0)}</p>
        <p>Sweet: {selectedPiece.sweet.toFixed(0)}</p>
        <p>Cool: {selectedPiece.cool.toFixed(0)}</p>
        <p>Sexy: {selectedPiece.sexy.toFixed(0)}</p>
        <p>Elegant: {selectedPiece.elegant.toFixed(0)}</p>
        <p>Tags: {selectedPiece.tags.join(", ") || "None"}</p>
        <p>Level: {level}</p>
        <input
          type="number"
          min="0"
          max="11"
          value={level}
          onChange={handleLevelChange}
        />
      </div>
    </div>
  );
};

export default PieceSelector;
