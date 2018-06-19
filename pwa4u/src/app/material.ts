import { MatIconModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '../../node_modules/@angular/core';

const matModules = [MatToolbarModule, MatIconModule];

@NgModule({
  imports: matModules,
  exports: matModules,
})
export class MyMatModules {}
