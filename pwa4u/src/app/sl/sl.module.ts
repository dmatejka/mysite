import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SLRoutingModule } from './sl-routing.module';
import { SlpageComponent } from './slpage/slpage.component';

@NgModule({
  imports: [
    CommonModule,
    SLRoutingModule
  ],
  declarations: [SlpageComponent]
})
export class SLModule { }
