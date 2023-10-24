import { Participation } from './Participation.model';

export class OlympicCountry {
  constructor(
    public id: number,
    public country: string,
    public participations: Participation[]
  ) {}
}
