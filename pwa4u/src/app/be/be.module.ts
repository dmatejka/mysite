import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BERoutingModule } from './be-routing.module';
import { BepageComponent } from './bepage/bepage.component';

@NgModule({
  imports: [
    CommonModule,
    BERoutingModule
  ],
  declarations: [BepageComponent]
})
export class BEModule { }
