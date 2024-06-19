import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {

  rates$!: Observable<any[]>;
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  amount: number = 0;
  result: number = 0;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.getRates();
  }

  getRates() {
    this.rates$ = this.currencyService.getExchangeRates('');
  }

  convertCurrency() {
    this.rates$.subscribe(rates => {
      const fromRate = rates.find(rate => rate.code === this.fromCurrency).mid;
      const toRate = rates.find(rate => rate.code === this.toCurrency).mid;
      this.result = (this.amount * fromRate) / toRate;
    });
  }
}
