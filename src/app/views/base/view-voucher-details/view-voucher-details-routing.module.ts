import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewVoucherDetailsComponent } from './view-voucher-details.component';

const routes: Routes = [{ path: '', component: ViewVoucherDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewVoucherDetailsRoutingModule { }
