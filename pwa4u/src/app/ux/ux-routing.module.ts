import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UxpageComponent } from './uxpage/uxpage.component';

const routes: Routes = [
  {
    path: '',
    component: UxpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UXRoutingModule {}
