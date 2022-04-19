import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewVoucherDetailsRoutingModule } from './view-voucher-details-routing.module';
import { ViewVoucherDetailsComponent } from './view-voucher-details.component';
import { PayShroffCounterRoutingModule } from '../pay-shroff-counter/pay-shroff-counter-routing.module';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { ButtonGroupModule, ButtonModule, CardModule, DropdownModule, FormModule, GridModule, ListGroupModule, SharedModule } from '@coreui/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    ViewVoucherDetailsComponent
  ],
  imports: [
    CommonModule,
    ViewVoucherDetailsRoutingModule,
    CommonModule,
    PayShroffCounterRoutingModule,
    DocsComponentsModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule,
    DataTablesModule
  ]
})
export class ViewVoucherDetailsModule { }
