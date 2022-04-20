import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateJournalEntriesRoutingModule } from './create-journal-entries-routing.module';
import { CreateJournalEntriesComponent } from './create-journal-entries.component';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { ButtonGroupModule, ButtonModule, CardModule, DropdownModule, FormModule, GridModule, ListGroupModule, SharedModule } from '@coreui/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    CreateJournalEntriesComponent
  ],
  imports: [
    CommonModule,
    CreateJournalEntriesRoutingModule,
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
export class CreateJournalEntriesModule { }
