import { trigger } from '@angular/animations';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
import {
  anyToBETransition,
  anyToFETransition,
  anyToSLTransition,
  anyToUXTransition,
  basicTransition,
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
      anyToUXTransition,
      anyToFETransition,
      anyToSLTransition,
      anyToBETransition,
    ]),
  ],
})
export class AppComponent implements OnInit {
  previousUrl: string;
  previousPosition = 1;
  currentPosition = 1;
  positionDirection: any;
  url: any;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private activeroute: ActivatedRoute,
    private meta: Meta
  ) {
    // GET Navigation Position clicked from ROUTER DATA
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(r => this.activeroute.firstChild.data['value']),
        tap(() => (this.previousPosition = this.currentPosition)),
        map(data => data['position']),
        tap(cur => (this.currentPosition = cur)),
        map(cur => ({ from: this.previousPosition, to: cur }))
      )
      .subscribe(data => {
        this.positionDirection = data;
      });

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        tap(r => console.log('ROUTE DATA:', r)),
        map(r => r['urlAfterRedirects'].slice(1)),
        tap(d => console.log('ROUTE DATA URL:', d))
      )
      .subscribe(urlname => {
        this.url = urlname;
        // change <body> CLASS => change body color
        if (this.previousUrl) {
          this.renderer.removeClass(document.body, `${this.previousUrl}-route`);
        }
        if (urlname) {
          this.renderer.addClass(document.body, `${urlname}-route`);
        }
        this.previousUrl = urlname;

        // change HTML META TAG
        switch (urlname) {
          case 'UX':
            this.meta.updateTag({ name: 'theme-color', content: '#004c80' });
            this.meta.updateTag({
              name: 'apple-mobile-web-app-status-bar-style',
              content: '#0083db',
            });
            break;
          case 'FE':
            this.meta.updateTag({ name: 'theme-color', content: '#006980' });
            this.meta.updateTag({
              name: 'apple-mobile-web-app-status-bar-style',
              content: '#00b5db',
            });
            break;
          case 'BE':
            this.meta.updateTag({ name: 'theme-color', content: '#be3704' });
            this.meta.updateTag({
              name: 'apple-mobile-web-app-status-bar-style',
              content: '#f84400',
            });
            break;
          case 'SL':
            this.meta.updateTag({ name: 'theme-color', content: '#cb6001' });
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
      });
  }

  ngOnInit() {}

  prepareRouteAnimation(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation'] || 'basic';
  }
}
