import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayShroffCounterComponent } from './pay-shroff-counter.component';

const routes: Routes = [{ path: '', component: PayShroffCounterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayShroffCounterRoutingModule { }
