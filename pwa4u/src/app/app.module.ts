import { NgModule } from '@angular/core';
import {
  BrowserModule,
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as Hammer from 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NavItemComponent } from './navigation/nav-item/nav-item.component';
import { NavigationComponent } from './navigation/navigation.component';

export class MyHammerConfig extends HammerGestureConfig {
  // overrides = <any>{
  //   // override hammerjs default configuration
  //   swipe: { direction: Hammer.DIRECTION_ALL },
  //   // 'touch-action': 'pan-y'
  // };

  buildHammer(element: HTMLElement) {
    const mc = new Hammer(element, {
      touchAction: 'pan-y',
    });

    return mc;
  }
}

@NgModule({
  declarations: [AppComponent, NavigationComponent, NavItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    // MyMatModules,
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
