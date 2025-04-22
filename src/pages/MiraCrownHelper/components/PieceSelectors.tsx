import { useEffect } from "react";
import { Piece } from "../../../types/Piece";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setSelectedPiece, setPieceLevel } from "../../../store/piecesSlice";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
  Slider,
  Typography,
  Box,
} from "@mui/material";

interface PieceSelectorProps {
  slot: string;
  pieces: Piece[];
}

const PieceSelector = ({ slot, pieces }: PieceSelectorProps) => {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.pieces[slot]);

  useEffect(() => {
    if (!selected && pieces.length > 0) {
      dispatch(setSelectedPiece({ slot, piece: pieces[0] }));
    }
  }, [dispatch, pieces, selected, slot]);

  const handlePieceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPiece = pieces.find((p) => p.name === event.target.value);
    if (selectedPiece) {
      dispatch(setSelectedPiece({ slot, piece: selectedPiece }));
    }
  };

  const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const level = parseInt(event.target.value, 10);
    if (!isNaN(level) && level >= 0 && level <= 11) {
      dispatch(setPieceLevel({ slot, level }));
    }
  };

  if (!selected) return null;

  return (
    <Box>
      <h2>{slot}</h2>

      <FormControl fullWidth margin="normal">
        <Select
          labelId={`${slot}-label`}
          value={selected.piece.name}
          onChange={(event) => {
            const selectedPiece = pieces.find(
              (p) => p.name === event.target.value
            );
            if (selectedPiece) {
              dispatch(setSelectedPiece({ slot, piece: selectedPiece }));
            }
          }}
        >
          {pieces.map((piece) => (
            <MenuItem key={piece.name} value={piece.name}>
              {piece.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box>
        <h3>{selected.piece.name}</h3>
        <p>Set: {selected.piece.set}</p>
        <p>Slot: {selected.piece.slot}</p>
        <p>Main Stat: {selected.piece.mainstat}</p>
        <p>Fresh: {selected.piece.fresh.toFixed(0)}</p>
        <p>Sweet: {selected.piece.sweet.toFixed(0)}</p>
        <p>Cool: {selected.piece.cool.toFixed(0)}</p>
        <p>Sexy: {selected.piece.sexy.toFixed(0)}</p>
        <p>Elegant: {selected.piece.elegant.toFixed(0)}</p>
        <p>Tags: {selected.piece.tags.join(", ") || "None"}</p>
        <p>Level: {selected.level}</p>

        <Box>
          <Slider
            value={selected.level}
            onChange={(event, newValue) =>
              dispatch(setPieceLevel({ slot, level: newValue as number }))
            }
            min={0}
            max={11}
            step={1}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `Level ${value}`}
            sx={{ mt: 2 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PieceSelector;
