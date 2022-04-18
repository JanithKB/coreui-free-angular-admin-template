import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DtRoutingModule } from './dt-routing.module';
import { DtComponent } from './dt.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    DtComponent
  ],
  imports: [
    CommonModule,
    DtRoutingModule,
    DataTablesModule
  ]
})
export class DtModule { }
