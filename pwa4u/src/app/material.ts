import { MatButtonModule } from '@angular/material';
import { NgModule } from '../../node_modules/@angular/core';

const matModules = [MatButtonModule];

@NgModule({
  imports: matModules,
  exports: matModules,
})
export class MyMatModules {}
