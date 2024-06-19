import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyListComponent } from './features/currency/currency-list/currency-list.component';
import {CurrencyConverterComponent} from "./features/currency/currency-converter/currency-converter.component";

const routes: Routes = [
  { path: '', component: CurrencyListComponent },
  { path: 'converter', component: CurrencyConverterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
