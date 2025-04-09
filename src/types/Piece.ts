export interface IPiece {
  name: string;
  set: string;
  slot: string;
  mainstat: string;
  fresh: number;
  sweet: number;
  cool: number;
  sexy: number;
  elegant: number;
  level: number;
  tags: string[];

  updateStats(level: number): void;
}

export class Piece implements IPiece {
  name: string;
  set: string;
  slot: string;
  mainstat: string;
  fresh: number;
  sweet: number;
  cool: number;
  sexy: number;
  elegant: number;
  level: number;
  tags: string[];

  private baseFresh: number;
  private baseSweet: number;
  private baseCool: number;
  private baseSexy: number;
  private baseElegant: number;

  // Define the level modifiers, 0 to 11
  private static levelModifiers = [
    1, 1.25, 1.55, 1.9, 2.3, 2.75, 3.25, 3.8, 4.4, 5, 5.6, 6.2,
  ];

  constructor(
    name: string,
    set: string,
    slot: string,
    mainstat: string,
    fresh: number,
    sweet:number,
    cool: number,
    sexy: number,
    elegant: number,
    tags: string[])
    {
    this.name = name;
    this.set = set;
    this.slot = slot;
    this.mainstat = mainstat; 
    this.fresh = fresh;
    this.sweet = sweet;
    this.cool = cool;
    this.sexy = sexy;
    this.elegant = elegant;
    this.tags = tags;
    this.level = 0;  // Default level is 0 when the piece is created
    // Initialize base stats
    this.baseFresh = fresh;
    this.baseSweet = sweet;
    this.baseCool = cool;
    this.baseSexy = sexy;
    this.baseElegant = elegant;

    // Initialize current stats to level 0
    this.updateStats(0);
  }

  updateStats(level: number): void {
    if (level >=1) {
      const modifier = Piece.levelModifiers[level];
      this.level = level;
      this.fresh = this.baseFresh * modifier;
      this.sweet = this.baseSweet * modifier;
      this.cool = this.baseCool * modifier;
      this.sexy = this.baseSexy * modifier;
      this.elegant = this.baseElegant * modifier;
    }
    else if (level === 0) {
      this.level = level;
      this.fresh = this.baseFresh;
      this.sweet = this.baseSweet;
      this.cool = this.baseCool;
      this.sexy = this.baseSexy;
      this.elegant = this.baseElegant;
    }
    else {
      console.error("Level must be between 0 and 11.");
    }
      
   
  }
}
