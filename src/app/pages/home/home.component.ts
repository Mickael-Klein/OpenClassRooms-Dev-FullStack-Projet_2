import { Component, OnInit } from '@angular/core';
import { Observable, of, map, tap } from 'rxjs';
import { InfoContainer } from 'src/app/core/models/InfoContainer.model';
import { OlympicCountry } from 'src/app/core/models/Olympic.model';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  olympics$: Observable<OlympicCountry[] | undefined | null> = of(undefined);
  joNumber$!: Observable<InfoContainer>;
  countryNumber$!: Observable<InfoContainer>;

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics();

    this.joNumber$ = this.olympics$.pipe(
      // Define how many JOs and pass this to child component in html template
      map((data) => {
        const title = 'Number of JOs';

        const uniqueYears = new Set<number>(); // In case one country has more years of participation
        if (data) {
          data.forEach((item) => {
            item.participations.forEach((participation) => {
              uniqueYears.add(participation.year);
            });
          });
        }

        const count = uniqueYears.size;
        return { title: title, count: count };
      })
    );

    this.countryNumber$ = this.olympics$.pipe(
      // Define how many countries...
      map((data) => {
        const title = 'Number of countries';
        const count = data?.length || 0;
        return { title: title, count: count };
      })
    );
  }

  titleValue = 'Medals per Country';
}
