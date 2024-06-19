import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SharedModule} from "../../../shared/shared.module";
import {CurrencyConverterComponent} from "./currency-converter.component";

@NgModule({
  declarations: [
    CurrencyConverterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    CurrencyConverterComponent
  ]
})
export class CurrencyConverterModule { }
