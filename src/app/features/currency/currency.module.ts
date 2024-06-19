import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyListModule } from './currency-list/currency-list.module';
import {CurrencyService} from "./services/currency.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CurrencyListModule,
  ],
  providers: [
    CurrencyService
  ]
})
export class CurrencyModule { }
