import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewVoucherDetailsRoutingModule } from './view-voucher-details-routing.module';
import { ViewVoucherDetailsComponent } from './view-voucher-details.component';


@NgModule({
  declarations: [
    ViewVoucherDetailsComponent
  ],
  imports: [
    CommonModule,
    ViewVoucherDetailsRoutingModule
  ]
})
export class ViewVoucherDetailsModule { }
