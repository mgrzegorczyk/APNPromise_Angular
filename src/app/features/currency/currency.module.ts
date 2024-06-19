import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyListModule } from './currency-list/currency-list.module';
import { CurrencyService } from "./services/currency.service";
import { CurrencyConverterModule } from "./currency-converter/currency-converter.module";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CurrencyListModule,
    CurrencyConverterModule
  ],
  providers: [
    CurrencyService
  ]
})
export class CurrencyModule { }
