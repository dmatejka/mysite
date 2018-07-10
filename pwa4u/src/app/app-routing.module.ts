import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';

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
    component: HomepageComponent,
    // loadChildren: './home/home.module#HomeModule',
    data: { animation: 'home', position: 1 },
  },
  {
    path: 'UX',
    loadChildren: './ux/ux.module#UXModule',
    data: { animation: 'UX', position: 2 },
  },
  {
    path: 'FE',
    loadChildren: './fe/fe.module#FEModule',
    data: { animation: 'FE', position: 3 },
  },
  {
    path: 'SL',
    loadChildren: './sl/sl.module#SLModule',
    data: { animation: 'SL', position: 4 },
  },
  {
    path: 'BE',
    loadChildren: './be/be.module#BEModule',
    data: { animation: 'BE', position: 5 },
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '/home', },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
