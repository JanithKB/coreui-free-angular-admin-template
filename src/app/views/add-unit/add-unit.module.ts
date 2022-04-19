import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUnitRoutingModule } from './add-unit-routing.module';
import { AddUnitComponent } from './add-unit.component';


@NgModule({
  declarations: [
    AddUnitComponent
  ],
  imports: [
    CommonModule,
    AddUnitRoutingModule
  ]
})
export class AddUnitModule { }
