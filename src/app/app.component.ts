import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { OlympicService } from './core/services/olympic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // General component for the whole app, will provide data to all the components and handle error on loading data
  public loadDataErrorOccured: boolean = false;
  public isLoading: boolean = true;

  constructor(private olympicService: OlympicService) {} // Provide OlympicService datas and methods to this instance

  ngOnInit(): void {
    // "ngOnInit" code will be executed on component initialisation
    this.olympicService // Request service
      .loadInitialData()
      .pipe(take(1)) // Get first value emitted by Observable
      .subscribe({
        next: () => {
          // after consumation
          this.isLoading = false; // end loading state
        },
        error: () => {
          // if returns an error, end loading state and errorState => true
          this.isLoading = false;
          this.loadDataErrorOccured = true;
        },
      });
  }
}
