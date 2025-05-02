import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalStats } from '../../../store/piecesSelectors'; // Adjust path
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const TotalStatsDisplay = () => {
  const { totalFresh, totalSweet, totalCool, totalSexy, totalElegant } = useSelector(selectTotalStats);

  return (
    <Card sx={{ maxWidth: 300, borderRadius: 3, boxShadow: 3, mt: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Total Stats
        </Typography>
        <List dense>
          <ListItem disablePadding>
            <ListItemText primary={`Fresh: ${totalFresh}`} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary={`Sweet: ${totalSweet}`} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary={`Cool: ${totalCool}`} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary={`Sexy: ${totalSexy}`} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary={`Elegant: ${totalElegant}`} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default TotalStatsDisplay;