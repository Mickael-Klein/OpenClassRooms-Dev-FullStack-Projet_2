import { Component, OnInit } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { InfoContainer } from 'src/app/core/models/InfoContainer.model';
import { OlympicCountry } from 'src/app/core/models/Olympic.model';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { PieChartData } from 'src/app/core/models/PieChartData.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

// Display home/index page to user, has general infos about olympics countries and a pie-chart,
// wich can redirect user to country page for more infos for specifics datas about one country
export class HomeComponent implements OnInit {
  olympics$!: Observable<OlympicCountry[] | undefined | null>;
  joNumber$!: Observable<InfoContainer>;
  countryNumber$!: Observable<InfoContainer>;
  pieChartDatas$!: Observable<PieChartData[]>;

  constructor(private olympicService: OlympicService) {} // Provides olympicService datas and methods to this instance

  ngOnInit(): void {
    // "ngOnInit" code will be executed during instance initialisation
    this.olympics$ = this.olympicService.getOlympics(); // get datas from service

    this.joNumber$ = this.olympics$.pipe(
      // Define how many JOs and pass this to child component in html template, provided to child component (app-info-container)
      map((data) => {
        const title = 'Number of JOs';

        const uniqueYears = new Set<number>(); // In case one country has more years of participation, Set only contains unique values => this case, years of participation
        if (data) {
          data.forEach((item) => {
            item.participations.forEach((participation) => {
              uniqueYears.add(participation.year);
            });
          });
        }

        const count = uniqueYears.size; // get number of years in data by getting lenght of the Set
        return { title: title, count: count };
      })
    );

    this.countryNumber$ = this.olympics$.pipe(
      // Define how many countries in data => html template use, provided for child component (app-info-container)
      map((data) => {
        const title = 'Number of countries';
        const count = data?.length || 0;
        return { title: title, count: count };
      })
    );

    this.pieChartDatas$ = this.olympics$.pipe(
      // Create observable wich contains datas ready for consumption by pie-chart component
      map((data) => {
        const tempPieChartDatas: Array<PieChartData> = []; // initialize array wich will be provided to the app-pie-chart-container, component waits for an array
        data?.forEach((item) => {
          const countryMedalsCount = item.participations.reduce((acc, cur) => {
            // reduce data wich has property "data.medalsCount"
            return acc + cur.medalsCount;
          }, 0);
          const countryData: PieChartData = {
            name: item.country,
            value: countryMedalsCount,
            extra: { id: item.id },
          };
          tempPieChartDatas.push(countryData); // Push the object in array
        });
        return tempPieChartDatas; // return the array
      })
    );
  }

  titleValue = 'Medals per Country'; // title of the page to display, => app-title-container
}
