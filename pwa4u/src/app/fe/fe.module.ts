import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FERoutingModule } from './fe-routing.module';
import { FepageComponent } from './fepage/fepage.component';

@NgModule({
  imports: [
    CommonModule,
    FERoutingModule
  ],
  declarations: [FepageComponent]
})
export class FEModule { }
