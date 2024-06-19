import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyListComponent } from './currency-list.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CurrencyListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    CurrencyListComponent
  ]
})
export class CurrencyListModule { }
