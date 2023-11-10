import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, delay, tap, map } from 'rxjs/operators';
import { OlympicCountry } from '../models/Olympic.model';

@Injectable({
  // This service is provided in root, so it can be use by any component in the app
  providedIn: 'root',
})
export class OlympicService {
  // This service makes a simulate http get call by requesting mock datas, then methods provide ways for components to access it
  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<undefined | null | OlympicCountry[]>(
    // BehaviourSubject is a type of observable wich keep last value in memory to make it accessible to any new subscriber, uploaded with its "next()" function
    undefined
  );

  constructor(private http: HttpClient) {} // Constructor provide http module to this instance and allow it to make various http request (similar to fetch)

  loadInitialData(): Observable<OlympicCountry[]> {
    // Upon app initialization, make an HTTP request to fetch data and handle errors if any.
    return this.http.get<OlympicCountry[]>(this.olympicUrl).pipe(
      // Get HTTP data as an observable, and "pipe" allows interactions with it.
      delay(500), // Simulate server response time.
      tap((value) => this.olympics$.next(value)),
      // "tap" triggers a side effect that doesn't directly interact with the value obtained from the observable; here, assign the value obtained from the HTTP request to the BehaviorSubject.
      catchError((error) => {
        // In case of an error with the HTTP request.
        console.error(error); // Log the error to the console.
        this.olympics$.next(null); // Assign a new value "null" to the BehaviorSubject so that subscribers can react appropriately (data request failed).
        return throwError(() => new Error(error)); // Return the error.
      })
    );
  }

  getOlympics(): Observable<OlympicCountry[] | null | undefined> {
    // Method provides data stored in BehaviourSubject as an Observable
    return this.olympics$.asObservable();
  }

  getCountryDetail(id: number): Observable<OlympicCountry | undefined> {
    // Method provides data of a specific country in data stored in BehaviourSubject to subscriber
    return this.olympics$.pipe(
      map((data) => {
        return data?.find((item) => item.id === id); // Filter by id to get the correct country in data (if there is), return undefined if nothing found
      })
    );
  }
}
