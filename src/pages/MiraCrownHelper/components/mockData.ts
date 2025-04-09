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
  // Royal Elegance Set (Retro)
  new Piece("Elegant Twilight", "Royal Elegance", "Dress", "Elegant", 120, 80, 60, 40, 100, [Tags.Retro]),
  new Piece("Royal Locks", "Royal Elegance", "Hair", "Elegant", 60, 40, 30, 20, 50, [Tags.Retro]),
  new Piece("Velvet Cape", "Royal Elegance", "Outerwear", "Elegant", 50, 30, 20, 15, 40, [Tags.Retro]),
  new Piece("Classic Socks", "Royal Elegance", "Socks", "Elegant", 30, 20, 15, 10, 25, [Tags.Retro]),
  new Piece("Heeled Grace", "Royal Elegance", "Shoes", "Elegant", 40, 30, 25, 15, 35, [Tags.Retro]),
  new Piece("Pearl Pendant", "Royal Elegance", "Accessory", "Elegant", 20, 15, 10, 5, 18, [Tags.Retro]),
  new Piece("Vintage Ring", "Royal Elegance", "Accessory", "Elegant", 22, 12, 8, 6, 20, [Tags.Retro]),
  new Piece("Royal Gloves", "Royal Elegance", "Accessory", "Elegant", 18, 10, 8, 4, 16, [Tags.Retro]),

  // Pastel Dream Set (Cute, Modern)
  new Piece("Sweet Melody", "Pastel Dream", "Dress", "Sweet", 150, 90, 50, 70, 80, [Tags.Cute, Tags.Modern]),
  new Piece("Cotton Curls", "Pastel Dream", "Hair", "Sweet", 70, 40, 30, 35, 45, [Tags.Cute, Tags.Modern]),
  new Piece("Puffy Jacket", "Pastel Dream", "Outerwear", "Sweet", 60, 35, 25, 30, 40, [Tags.Cute, Tags.Modern]),
  new Piece("Heart Socks", "Pastel Dream", "Socks", "Sweet", 35, 20, 15, 18, 25, [Tags.Cute, Tags.Modern]),
  new Piece("Candy Boots", "Pastel Dream", "Shoes", "Sweet", 45, 25, 20, 28, 30, [Tags.Cute, Tags.Modern]),
  new Piece("Lollipop Ring", "Pastel Dream", "Accessory", "Sweet", 25, 15, 10, 12, 18, [Tags.Cute, Tags.Modern]),
  new Piece("Pastel Choker", "Pastel Dream", "Accessory", "Sweet", 20, 12, 8, 10, 16, [Tags.Cute, Tags.Modern]),
  new Piece("Sweet Bangles", "Pastel Dream", "Accessory", "Sweet", 18, 10, 6, 9, 15, [Tags.Cute, Tags.Modern]),

  // Ocean Whisper Set (No tags)
  new Piece("Cool Breeze", "Ocean Whisper", "Dress", "Cool", 110, 130, 170, 60, 90, []),
  new Piece("Sea Foam Waves", "Ocean Whisper", "Hair", "Cool", 55, 65, 85, 30, 45, []),
  new Piece("Mist Coat", "Ocean Whisper", "Outerwear", "Cool", 50, 60, 75, 28, 40, []),
  new Piece("Oceanic Socks", "Ocean Whisper", "Socks", "Cool", 28, 35, 45, 20, 30, []),
  new Piece("Tide Runners", "Ocean Whisper", "Shoes", "Cool", 38, 42, 55, 25, 35, []),
  new Piece("Shell Pendant", "Ocean Whisper", "Accessory", "Cool", 22, 25, 32, 14, 20, []),
  new Piece("Marine Ring", "Ocean Whisper", "Accessory", "Cool", 20, 22, 28, 12, 18, []),
  new Piece("Wave Hairpin", "Ocean Whisper", "Accessory", "Cool", 18, 20, 25, 10, 16, []),
];