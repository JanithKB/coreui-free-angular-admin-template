import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewUnitsRoutingModule } from './view-units-routing.module';
import { ViewUnitsComponent } from './view-units.component';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
    ViewUnitsComponent
  ],
  imports: [
    CommonModule,
    ViewUnitsRoutingModule,
    DataTablesModule
  ]
})
export class ViewUnitsModule { }
