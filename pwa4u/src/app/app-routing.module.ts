import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:'', component: IntroPageComponent, data: {animation:'intro'}},
  // {path:'advanced', component: AdvancedPageComponent, data: {animation:'advanced'}},
  // {path:'routing',
  //  component: RoutingPageComponent,
  //  data: {
  //    animation: 'routing'
  //  },
  //  children: [
  //    { path: '', component: RoutePage1Component, data: { animation: '1' } },
  //    { path: 'page2', component: RoutePage2Component, data: { animation: '2' } },
  //    { path: 'page3', component: RoutePage3Component, data: { animation: '3' } },
  //    { path: 'page4', component: RoutePage4Component, data: { animation: '4' } },
  //    { path: 'page5', component: RoutePage5Component, data: { animation: '5' } }
  //  ]
  // },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'ux',
    loadChildren: './ux/ux.module#UXModule',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
