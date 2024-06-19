import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private API_URL = 'https://api.nbp.pl/api/exchangerates/tables/A/';
  private supportedCurrencies = ['EUR', 'USD', 'PLN', 'CHF', 'GBP'];

  constructor(private http: HttpClient) { }

  getExchangeRates(date: string = ''): Observable<any[]> {
    const formattedDate = date ? new Date(date).toISOString().split('T')[0] : '';
    const url = formattedDate ? `${this.API_URL}${formattedDate}/` : this.API_URL;
    return this.http.get<any[]>(url).pipe(
      map(response => {
        return response[0].rates.filter((rate: { code: string; }) => {
          return this.supportedCurrencies.includes(rate.code);
        });
      })
    );
  }
}
