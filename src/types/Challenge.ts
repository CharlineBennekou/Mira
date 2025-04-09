export interface IChallenge {
    id: string;
    name: string;
    normalscore: number;
    perfectscore: number;
    primarystat: string;
    secondarystat: string;
    tag: string;
    notes: string;
  }
  
  export class Challenge implements IChallenge {
    id: string;
    name: string;
    normalscore: number;
    perfectscore: number;
    primarystat: string;
    secondarystat: string;
    tag: string;
    notes: string;
  
    constructor(id: string,
      name: string,
      normalscore: number,
      perfectscore: number,
      primarystat:
      string,
      secondarystat: string,
      tag: string,
      notes: string) {
      this.id = id;
      this.name = name;
      this.normalscore = normalscore;
      this.perfectscore = perfectscore;
      this.primarystat = primarystat;
      this.secondarystat = secondarystat;
      this.tag = tag;
      this.notes= notes;
    }
  

  }
  