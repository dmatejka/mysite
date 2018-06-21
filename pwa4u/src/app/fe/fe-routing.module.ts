import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FepageComponent } from './fepage/fepage.component';

const routes: Routes = [
  {
    path: '',
    component: FepageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FERoutingModule {}
