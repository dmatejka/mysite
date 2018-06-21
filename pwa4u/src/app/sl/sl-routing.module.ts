import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlpageComponent } from './slpage/slpage.component';

const routes: Routes = [
  {
    path: '',
    component: SlpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SLRoutingModule {}
