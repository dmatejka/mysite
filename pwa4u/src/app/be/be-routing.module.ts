import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BepageComponent } from './bepage/bepage.component';

const routes: Routes = [
  {
    path: '',
    component: BepageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BERoutingModule {}
