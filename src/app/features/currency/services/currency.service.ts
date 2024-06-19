import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, catchError, finalize, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private API_URL = 'https://api.nbp.pl/api/exchangerates/tables/A/';
  private supportedCurrencies = ['EUR', 'USD', 'PLN', 'CHF', 'GBP'];
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private http: HttpClient) { }

  getExchangeRates(date: string = ''): Observable<any[]> {
    const formattedDate = date ? new Date(date).toISOString().split('T')[0] : '';
    const url = formattedDate ? `${this.API_URL}${formattedDate}/` : this.API_URL;
    this.loadingSubject.next(false);
    return this.http.get<any[]>(url).pipe(
      tap(() => this.loadingSubject.next(false)),
      map(response => response[0].rates.filter((rate: { code: string; }) => this.supportedCurrencies.includes(rate.code))),
      catchError(err => {
        this.loadingSubject.next(false);
        throw err;
      }),
      finalize(() => this.loadingSubject.next(false))
    );
  }
}
