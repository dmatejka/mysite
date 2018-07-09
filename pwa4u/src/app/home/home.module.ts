import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { ResponsiveNameComponent } from './responsive-name/responsive-name.component';
import { ResponsivePictureComponent } from './responsive-picture/responsive-picture.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomepageComponent, ResponsiveNameComponent, ResponsivePictureComponent]
})
export class HomeModule { }
