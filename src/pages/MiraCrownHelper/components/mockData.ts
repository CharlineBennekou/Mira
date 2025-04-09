import { Challenge } from "../../../types/Challenge";
import { Piece } from "../../../types/Piece";
import { Stats } from "../../../types/Stats"; // Update the path if needed
import { Tags } from "../../../types/Tags"; // Import Tags from the appropriate module

// Mock Challenges
export const challenges = [
  new Challenge(
    "1",
    "Challenge A",
    1000,
    1200,
    Stats.Fresh,
    Stats.Sweet,
    "cute",
    "This is a fun challenge to test your freshness and sweetness."
  ),
  new Challenge(
    "2",
    "Challenge B",
    1500,
    1800,
    Stats.Cool,
    Stats.Sexy,
    "retro",
    "A challenge to test your coolness and sexiness. Retro vibes!"
  ),
  new Challenge(
    "3",
    "Challenge C",
    800,
    950,
    Stats.Elegant,
    "",
    "",
    "This challenge is all about elegance and style."
  ),
];

export const mockPieces: Piece[] = [
  new Piece(
    "Elegant Twilight",
    "Royal Elegance",
    "Dress",
    "Elegant",
    120,
    80,
    60,
    40,
    100,
    [Tags.Retro] // One tag
  ),
  new Piece(
    "Sweet Melody",
    "Pastel Dream",
    "Dress",
    "Sweet",
    150,
    90,
    50,
    70,
    80,
    [Tags.Cute, Tags.Modern] // Two tags
  ),
  new Piece(
    "Cool Breeze",
    "Ocean Whisper",
    "Dress",
    "Cool",
    110,
    130,
    170,
    60,
    90,
    [] // No tags
  ),
];