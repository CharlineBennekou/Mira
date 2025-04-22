import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setSelectedChallenge } from "../../../store/challengesSlice";
import { challenges } from "./mockData";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const ChallengeSelect = () => {
  const dispatch = useAppDispatch();
  const selectedChallenge = useAppSelector(
    (state) => state.challenge.selectedChallenge
  );

  const handleSelectChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    dispatch(setSelectedChallenge(event.target.value as string));
  };

  return (
    <Box>
      <FormControl  sx={{ minWidth: 200 }} margin="normal">
        <Select
          labelId="challengeSelect-label"
          id="challengeSelect"
          value={selectedChallenge.id}
          onChange={handleSelectChange}
        >
          {challenges.map((challenge) => (
            <MenuItem key={challenge.id} value={challenge.id}>
              {challenge.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box mt={2}>
        <h3>{selectedChallenge.name}</h3>
        <p>
          <strong>Primary Stat:</strong> {selectedChallenge.primarystat}
        </p>
        <p>
          <strong>Secondary Stat:</strong>{" "}
          {selectedChallenge.secondarystat || "N/A"}
        </p>
        <p>
          <strong>Tag:</strong> {selectedChallenge.tag || "No tag"}
        </p>
        <p>
          <strong>Notes:</strong> {selectedChallenge.notes}
        </p>
      </Box>
    </Box>
  );
};

export default ChallengeSelect;
