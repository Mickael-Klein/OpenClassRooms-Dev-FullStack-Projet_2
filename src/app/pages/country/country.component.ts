import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { InfoContainer } from 'src/app/core/models/InfoContainer.model';
import {
  LineChartDatasContainer,
  Series,
  MinMaxSeriesValue,
  LineChartData,
} from 'src/app/core/models/LineChartData.model';
import { OlympicCountry } from 'src/app/core/models/Olympic.model';
import { Participation } from 'src/app/core/models/Participation.model';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  // Display the country page wich contains a line chart (ngx-chart)
  country$!: Observable<OlympicCountry | undefined>;
  countryName$!: Observable<string>;
  countryParticipations$!: Observable<Participation[]>;
  infoContainerCountryEntriesCount$!: Observable<InfoContainer>;
  infoContainerCountryMedalsCount$!: Observable<InfoContainer>;
  infoContainerCountryAthletesCount$!: Observable<InfoContainer>;
  lineChartContainerData$!: Observable<LineChartDatasContainer>;
  serviceResponseIsNotUndefined: boolean = true;

  constructor(
    // Provide router for navigation, route to get the active route in url, and olympicService to get access to specific data
    private router: Router,
    private route: ActivatedRoute,
    private olympicService: OlympicService
  ) {}

  ngOnInit(): void {
    // "ngOnInit" code will be executed on component initialisation
    const countryId = +this.route.snapshot.params['id']; // Retrieve the 'id' parameter from the URL using the Angular ActivatedRoute snapshot.
    this.country$ = this.olympicService.getCountryDetail(countryId); // Request OlympicService to get country data or undefined if the id is not correct
    this.country$.subscribe((data) => {
      // Subscribe to observable to handle request result
      if (data === undefined) {
        this.serviceResponseIsNotUndefined = false; // state variable is false to render correct view in case country id is not correct
        console.error('Id param in URL is invalid');
      }
    });

    this.countryName$ = this.country$.pipe(
      // Get the country name from data in Observable, as an Observable, => app-title-container
      map((data) => data?.country || 'Error')
    );

    this.countryParticipations$ = this.country$.pipe(
      // Get the country participations from data in Observable, as an Observable
      map((data) => data?.participations || [])
    );

    // Create an observable 'infoContainerCountryEntriesCount$' by applying a 'map' operator to 'countryParticipations$'.
    this.infoContainerCountryEntriesCount$ = this.countryParticipations$.pipe(
      map((data) => {
        const title = 'Number of entries';
        // Calculate the count of entries based on the length of 'data' (with optional chaining to handle possible null values).
        const count = data?.length;
        return { title: title, count: count };
      })
    );

    // Create an observable 'infoContainerCountryMedalsCount$' by applying a 'map' operator to 'countryParticipations$'.
    this.infoContainerCountryMedalsCount$ = this.countryParticipations$.pipe(
      map((data) => {
        const title = 'Total number of medals'; // Define a title for the information container.
        const count = data.reduce((acc, cur) => {
          // Calculate the total count of medals by reducing the 'medalsCount' property of each entry in 'data'.
          return acc + cur.medalsCount;
        }, 0);
        return { title: title, count: count };
      })
    );

    // Create an observable 'infoContainerCountryAthletesCount$' by applying a 'map' operator to 'countryParticipations$'.
    this.infoContainerCountryAthletesCount$ = this.countryParticipations$.pipe(
      map((data) => {
        const title = 'Total numbers of athletes';
        const count = data.reduce((acc, cur) => {
          // Calculate the total count of athletes by reducing the 'athleteCount' property of each entry in 'data'.
          return acc + cur.athleteCount;
        }, 0);
        return { title: title, count: count };
      })
    );

    this.lineChartContainerData$ = this.countryParticipations$.pipe(
      // Create an observable wich will be use in app-line-chart-container, contains data for line chart (ngx-charts)
      switchMap((data) => {
        // High level operator "switchMap" allow to switch to a new observable from data receive from another observable
        const series: Series[] = [];
        data.forEach((item) => {
          series.push({ name: item.year.toString(), value: item.medalsCount });
        });

        // Get min & max values in series values to pass their closest decades as attributes in line chart component in Y axis scale
        // (min value => decades under, max value => decades above)
        let minYValue = Number.MAX_VALUE;
        let maxYValue = Number.MIN_VALUE;
        series.forEach((e) => {
          const cur = e.value;
          if (cur < minYValue) {
            minYValue = cur;
          }
          if (cur > maxYValue) {
            maxYValue = cur;
          }
        });
        if (minYValue > 10) {
          // Allow to find the decade under for line chart Y axis space with min value displayed
          minYValue = Math.round(minYValue / 10 - 1) * 10;
        }
        maxYValue = Math.round(maxYValue / 10 + 1) * 10; // Allow to find the decade above for line chart y axis space with max value displayed

        return this.countryName$.pipe(
          // return final result (type: LineChartDatasContainer) as observable to be use in app-line-chart-container
          map((name) => {
            const minMaxValues = new MinMaxSeriesValue(minYValue, maxYValue);
            const data: LineChartData = new LineChartData(name, series);
            const lineChartData = new LineChartDatasContainer(
              [data],
              minMaxValues
            );
            return lineChartData;
          })
        );
      })
    );
  }
}
