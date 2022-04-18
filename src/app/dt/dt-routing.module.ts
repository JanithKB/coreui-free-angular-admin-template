import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DtComponent } from './dt.component';

const routes: Routes = [{ path: '', component: DtComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DtRoutingModule { }
