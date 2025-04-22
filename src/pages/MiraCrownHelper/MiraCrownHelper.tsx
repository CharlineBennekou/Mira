import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import ChallengeSelect from './components/ChallengeSelect';
import PieceSelector from './components/PieceSelectors';
// import { mockPieces } from "./components/mockData"; // No longer needed
import { Piece } from "../../types/Piece";
import { useFetchPiecesQuery } from "../../store/piecesAPI";

const MiraCrownHelper = () => {
  // Simplified slots. Updating this later.
  const mainSlots = ["Hair", "Dress", "Outerwear", "Socks", "Shoes"];

  const accessorySlots = [
    "Accessory1",
    "Accessory2",
    "Accessory3",
    "Accessory4",
    "Accessory5",
  ];

  // Currently using data from json server
  const { data: pieces = [], error, isLoading } = useFetchPiecesQuery();

  // Helper to filter pieces by slot
  const getPiecesBySlot = (slot: string): Piece[] => {
    return pieces.filter((p) => p.slot.toLowerCase() === slot.toLowerCase());
  };

  if (isLoading) return <div>Loading pieces...</div>;
  if (error) return <div>Failed to load pieces.</div>;

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
                <PieceSelector slot={slot} pieces={getPiecesBySlot(slot)} />
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
                  pieces={pieces.filter((p) =>
                    p.slot.toLowerCase().includes("accessory")
                  )}
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
