import { trigger } from '@angular/animations';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
import {
  basicTransition,
  homeToBETransition,
  homeToFETransition,
  homeToSLTransition,
  homeToUXTransition,
  homeTransition,
} from './app-routing-animation';

@Component({
  selector: 'x5-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      basicTransition,

      homeTransition,
      homeToUXTransition,
      homeToFETransition,
      homeToSLTransition,
      homeToBETransition,
    ]),
  ],
})
export class AppComponent implements OnInit {
  previousUrl: string;
  previousPosition = 1;
  currentPosition = 1;
  positionDirection: any;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private activeroute: ActivatedRoute,
    private meta: Meta
  ) {
    // const positionDir = activeroute.data.pipe(
    //   tap(cur => console.log('RX-cur - incomming', cur)),
    //   map(d => d.position),
    //   tap(() => (this.previousPosition = this.currentPosition)),
    //   map(cur => this.previousPosition > cur),
    //   tap(cur => console.log('RX-cur', cur))
    // );

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(r => this.activeroute.firstChild.data['value']),
        tap(() => (this.previousPosition = this.currentPosition)),
        map(data => data['position']),
        tap(cur => (this.currentPosition = cur)),
        map(cur => ({ from: this.previousPosition, to: cur }))
        // take(1),
      )
      .subscribe(data => {
        this.positionDirection = data;
        // console.log('DATA', data);
        // console.log('this.currentPosition', this.currentPosition);
        // console.log('this.previousPosition', this.previousPosition);
      });

    // positionDir.subscribe(data => console.log('DATA', data));

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // change <body> CLASS
        if (this.previousUrl) {
          this.renderer.removeClass(document.body, `${this.previousUrl}-route`);
        }
        const currentUrlSlug = event.url.slice(1);
        if (currentUrlSlug) {
          this.renderer.addClass(document.body, `${currentUrlSlug}-route`);
        }
        this.previousUrl = currentUrlSlug;

        // change HTML META TAG
        switch (currentUrlSlug) {
          case 'UX':
            this.meta.updateTag({ name: 'theme-color', content: '#0083db' });
            this.meta.updateTag({
              name: 'apple-mobile-web-app-status-bar-style',
              content: '#0083db',
            });
            break;
          case 'FE':
            this.meta.updateTag({ name: 'theme-color', content: '#00b5db' });
            this.meta.updateTag({
              name: 'apple-mobile-web-app-status-bar-style',
              content: '#00b5db',
            });
            break;
          case 'BE':
            this.meta.updateTag({ name: 'theme-color', content: '#f84400' });
            this.meta.updateTag({
              name: 'apple-mobile-web-app-status-bar-style',
              content: '#f84400',
            });
            break;
          case 'SL':
            this.meta.updateTag({ name: 'theme-color', content: '#f87400' });
            this.meta.updateTag({
              name: 'apple-mobile-web-app-status-bar-style',
              content: '#f87400',
            });
            break;
          default:
            this.meta.updateTag({ name: 'theme-color', content: '#86078b' });
            this.meta.updateTag({
              name: 'apple-mobile-web-app-status-bar-style',
              content: '#86078b',
            });
            break;
        }

        // if (this.activeroute.snapshot.data) {
        //   console.log(
        //     'RX-cur - this.activeroute.data',
        //     this.activeroute.snapshot.data
        //   );
        // }
      }
    });
  }

  ngOnInit() {}

  // positionDirection(outlet: RouterOutlet) {
  //   this.previousPosition = this.currentPosition;
  //   this.currentPosition = outlet.activatedRouteData['position'] || 0;
  //   if (this.previousPosition - this.currentPosition !== 0) {
  //     return this.previousPosition - this.currentPosition > 0 ? 'DOWN' : 'UP';
  //   }
  //   return 'stay';
  // }

  prepareRouteAnimation(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation'] || 'basic';
  }
}
