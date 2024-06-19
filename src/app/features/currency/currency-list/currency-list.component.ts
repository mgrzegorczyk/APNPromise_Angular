import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {CurrencyService} from "../services/currency.service";

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {

  rates$!: Observable<any[]>;
  isLoading$!: Observable<boolean>;
  date: string = '';
  maxDate: Date = new Date();
  today: Date = new Date();

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.date = this.today.toISOString().split('T')[0];
    this.isLoading$ = this.currencyService.loading$;
    this.getRates();
  }

  getRates() {
    this.rates$ = this.currencyService.getExchangeRates(this.date);
  }

  onDateChange(event: any) {
    this.date = event.value ? new Date(event.value).toISOString().split('T')[0] : '';
    this.getRates();
  }
}
