import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJournalEntriesComponent } from './create-journal-entries.component';

const routes: Routes = [{ path: '', component: CreateJournalEntriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateJournalEntriesRoutingModule { }
