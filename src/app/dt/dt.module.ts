import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DtRoutingModule } from './dt-routing.module';
import { DtComponent } from './dt.component';


@NgModule({
  declarations: [
    DtComponent
  ],
  imports: [
    CommonModule,
    DtRoutingModule
  ]
})
export class DtModule { }
