import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UXRoutingModule } from './ux-routing.module';
import { UxpageComponent } from './uxpage/uxpage.component';

@NgModule({
  imports: [
    CommonModule,
    UXRoutingModule
  ],
  declarations: [UxpageComponent]
})
export class UXModule { }
