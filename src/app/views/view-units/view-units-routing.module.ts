import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewUnitsComponent } from './view-units.component';

const routes: Routes = [{ path: '', component: ViewUnitsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewUnitsRoutingModule { }
