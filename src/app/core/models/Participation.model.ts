export class Participation {
  // Model of data for participation of each country in olympics (receive in Olympic.service), used in Olympic.model
  constructor(
    public id: number,
    public year: number,
    public city: string,
    public medalsCount: number,
    public athleteCount: number
  ) {}
}
