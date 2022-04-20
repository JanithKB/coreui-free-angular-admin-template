import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUnitComponent } from './add-unit.component';

const routes: Routes = [{ path: '', component: AddUnitComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddUnitRoutingModule { }
