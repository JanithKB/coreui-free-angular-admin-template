import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayShroffCounterRoutingModule } from './pay-shroff-counter-routing.module';
import { PayShroffCounterComponent } from './pay-shroff-counter.component';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { ButtonGroupModule, ButtonModule, CardModule, DropdownModule, FormModule, GridModule, ListGroupModule, SharedModule } from '@coreui/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    PayShroffCounterComponent,

  ],
  imports: [
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
    DataTablesModule,

  ]
})
export class PayShroffCounterModule { }
