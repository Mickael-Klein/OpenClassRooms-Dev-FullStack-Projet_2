import { Participation } from './Participation.model';

export class OlympicCountry {
  // Model of data for each olympic country receive in olympic.service
  constructor(
    public id: number,
    public country: string,
    public participations: Participation[]
  ) {}
}
