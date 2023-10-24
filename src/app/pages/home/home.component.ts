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
export class HomeComponent implements OnInit {
  olympics$: Observable<OlympicCountry[] | undefined | null> = of(undefined);
  joNumber$!: Observable<InfoContainer>;
  countryNumber$!: Observable<InfoContainer>;
  pieChartDatas$!: Observable<PieChartData[]>;

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics(); // get datas from service

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
      // Define how many countries => html template use
      map((data) => {
        const title = 'Number of countries';
        const count = data?.length || 0;
        return { title: title, count: count };
      })
    );

    this.pieChartDatas$ = this.olympics$.pipe(
      map((data) => {
        const tempPieChartDatas: Array<PieChartData> = [];
        data?.forEach((item) => {
          const countryMedalsCount = item.participations.reduce((acc, cur) => {
            return acc + cur.medalsCount;
          }, 0);
          const countryData: PieChartData = {
            country: item.country,
            medalsCount: countryMedalsCount,
          };
          tempPieChartDatas.push(countryData);
        });
        return tempPieChartDatas;
      })
    );
  }

  titleValue = 'Medals per Country';
}
