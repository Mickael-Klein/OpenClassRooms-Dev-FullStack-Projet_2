import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError, timer } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { OlympicCountry } from '../models/Olympic.model';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<undefined | null | OlympicCountry[]>(
    undefined
  );

  constructor(private http: HttpClient) {}

  loadInitialData() {
    return this.http.get<OlympicCountry[]>(this.olympicUrl).pipe(
      tap((value) => this.olympics$.next(value)),
      tap((value) => console.log(value)),
      catchError((error) => {
        // TODO: improve error handling
        console.error(error);
        // can be useful to end loading state and let the user know something went wrong
        this.olympics$.next(null);
        return throwError(() => new Error(error));
      })
    );
  }

  // getOlympics() {
  //   return this.olympics$.asObservable();
  // }

  getOlympics() {
    return timer(5000).pipe(switchMap(() => this.olympics$.asObservable()));
  }
}