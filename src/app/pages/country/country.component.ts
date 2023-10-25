import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { OlympicCountry } from 'src/app/core/models/Olympic.model';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  country$!: Observable<OlympicCountry | undefined>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private olympicService: OlympicService
  ) {}

  ngOnInit(): void {
    const countryId = +this.route.snapshot.params['id'];
    this.country$ = this.olympicService.getCountryDetail(countryId);
    this.country$.subscribe((data) => {
      if (data === undefined) {
        console.error('Id param in URL is invalid');
        this.router.navigateByUrl('**');
      }
    });
  }
}
