// src/pages/MiraCrownHelper.tsx
import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
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
    <Box sx={{ p: 2 }}>
      {/* ChallengeSelect Box */}
      <Box sx={{ mb: 3 }}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h5" gutterBottom>
            Select Challenge
          </Typography>
          <ChallengeSelect />
        </Paper>
      </Box>

      {/* Main Outfit Section */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Main Outfit
        </Typography>
        <Grid container spacing={3}>
          {mainSlots.map((slot) => (
            <Grid item xs={12} md={6} key={slot}>
              <Paper sx={{ padding: 2 }}>
                <PieceSelector
                  slot={slot}
                  pieces={getPiecesBySlot(slot)}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Accessories Section */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Accessories
        </Typography>
        <Grid container spacing={3}>
          {accessorySlots.map((slot, index) => (
            <Grid item xs={12} md={6} key={slot}>
              <Paper sx={{ padding: 2 }}>
                <PieceSelector
                  slot={`Accessory ${index + 1}`}
                  pieces={mockPieces.filter((p) => p.slot.toLowerCase().includes("accessory"))}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default MiraCrownHelper;
