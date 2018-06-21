import {
  animate,
  group,
  keyframes,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
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

@Component({
  selector: 'x5-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* => basic', [
        query(
          ':enter',
          [
            style({
              opacity: 0,
            }),
            animate(
              '3000ms',
              style({
                opacity: 1,
              })
            ),
          ],
          { optional: true }
        ),
      ]),

      transition('*=>home', [
        group([
          query(
            '.container',
            [
              style({
                transform: 'scale(.1) rotate(-360deg)',
              }),
              animate(
                '450ms',
                keyframes([
                  style({ transform: 'scale(0.1) rotate(-360deg)', offset: 0 }),
                  style({
                    transform: 'scale(0.5) rotate(-45deg)',
                    offset: 0.75,
                  }),
                  style({ transform: 'scale(1) rotate(0deg)', offset: 1.0 }),
                ])
              ),
            ],
            { optional: true }
          ),
          query(
            '.container div',
            [
              style({
                'border-radius': '33%',
              }),
              animate(
                '550ms',
                style({
                  'border-radius': '0%',
                })
              ),
            ],
            { optional: true }
          ),
        ]),
        query(
          '.container div span',
          stagger('100ms', [
            animate(
              '450ms',
              keyframes([
                style({ opacity: 0, offset: 0.0 }),
                style({ opacity: 0.6, offset: 0.1 }),
                style({ opacity: 1, offset: 0.101 }),
                style({ opacity: 0, offset: 0.103 }),
                style({ opacity: 0.6, offset: 0.2 }),
                style({ opacity: 1, offset: 0.202 }),
                style({ opacity: 0, offset: 0.205 }),
                style({ opacity: 0.6, offset: 0.3 }),
                style({ opacity: 1, offset: 0.305 }),
                style({ opacity: 0, offset: 0.308 }),
                style({ opacity: 0.6, offset: 0.4 }),
                style({ opacity: 1, offset: 0.405 }),
                style({ opacity: 0, offset: 0.5 }),
                style({ opacity: 0.6, offset: 0.502 }),
                style({ opacity: 1, offset: 0.508 }),
                style({ opacity: 0, offset: 0.6 }),
                style({ opacity: 0.6, offset: 0.605 }),
                style({ opacity: 1, offset: 0.7 }),
                style({ opacity: 0, offset: 0.702 }),
                style({ opacity: 0.6, offset: 0.708 }),
                style({ opacity: 1, offset: 0.8 }),
                style({ opacity: 0, offset: 0.802 }),
                style({ opacity: 0.6, offset: 0.808 }),
                style({ opacity: 1, offset: 0.9 }),
                style({ opacity: 0, offset: 0.902 }),
                style({ opacity: 1, offset: 0.908 }),
                style({ opacity: 0.5, offset: 1 }),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),

      transition('home=>UX', [
        group([
          query('.container div', [
            style({ 'border-width': 0 }),
            animate('200ms', style({ opacity: 0 })),
            style({ opacity: 0 }),
          ]),
          query('.UX', [
            style({
              opacity: 1,
              'transform-origin': '50% 50%',
            }),
            group([
              animate(
                '250ms ease-out',
                style({
                  transform: ' scale(.7)',
                })
              ),
              animate(
                '400ms',
                style({
                  opacity: 0,
                })
              ),
            ]),
          ]),

          query('.limit ', [
            style({
              position: 'absolute',
              top: 0,
              left: 0,
              overflow: 'hidden',
              'z-index': 5,
              width: '100vw',
              height: '100vh',
            }),
          ]),

          query('.backgroudcircle ', [
            style({
              position: 'relative',
              'transform-origin': '50 50',
              left: '50vw',
              top: '50vh',
              opacity: 0,
              'border-radius': '50%',
              'background-color': 'var(--darker-UX-color)',
              width: '1em',
              height: '1em',
            }),
            animate(
              '750ms ease-out',
              style({
                transform: 'scale(250)',
                opacity: 0.7,
              })
            ),
          ]),
        ]),
      ]),

      transition('home=>FE', [
        group([
          query('.container div', [
            style({ 'border-width': 0 }),
            animate('200ms', style({ opacity: 0 })),
            style({ opacity: 0 }),
          ]),
          query('.FE', [
            style({
              opacity: 1,
              'transform-origin': '50% 50%',
            }),
            group([
              animate(
                '250ms ease-out',
                style({
                  transform: ' scale(.7)',
                })
              ),
              animate(
                '400ms',
                style({
                  opacity: 0,
                })
              ),
            ]),
          ]),

          query('.limit ', [
            style({
              position: 'absolute',
              top: 0,
              left: 0,
              overflow: 'hidden',
              'z-index': 1000,
              width: '100vw',
              height: '100vh',
            }),
          ]),

          query('.backgroudcircle ', [
            style({
              position: 'relative',
              'transform-origin': '50 50',
              left: '50vw',
              top: '50vh',
              opacity: 0,
              'border-radius': '50%',
              'background-color': 'var(--main-FE-color)',
              width: '1em',
              height: '1em',
            }),
            animate(
              '750ms ease-out',
              style({
                transform: 'scale(250)',
                opacity: 0.7,
              })
            ),
          ]),
        ]),
      ]),

      transition('home=>SL', [
        group([
          query('.container div', [
            style({ 'border-width': 0 }),
            animate('200ms', style({ opacity: 0 })),
            style({ opacity: 0 }),
          ]),
          query('.SL', [
            style({
              opacity: 1,
              'transform-origin': '50% 50%',
            }),
            group([
              animate(
                '250ms ease-out',
                style({
                  transform: ' scale(.7)',
                })
              ),
              animate(
                '400ms',
                style({
                  opacity: 0,
                })
              ),
            ]),
          ]),

          query('.limit ', [
            style({
              position: 'absolute',
              top: 0,
              left: 0,
              overflow: 'hidden',
              'z-index': 1000,
              width: '100vw',
              height: '100vh',
            }),
          ]),

          query('.backgroudcircle ', [
            style({
              position: 'relative',
              'transform-origin': '50 50',
              left: '50vw',
              top: '50vh',
              opacity: 0,
              'border-radius': '50%',
              'background-color': 'var(--main-SL-color)',
              width: '1em',
              height: '1em',
            }),
            animate(
              '750ms ease-out',
              style({
                transform: 'scale(250)',
                opacity: 0.7,
              })
            ),
          ]),
        ]),
      ]),

      transition('home=>BE', [
        group([
          query('.container div', [
            style({ 'border-width': 0 }),
            animate('200ms', style({ opacity: 0 })),
            style({ opacity: 0 }),
          ]),
          query('.BE', [
            style({
              opacity: 1,
              'transform-origin': '50% 50%',
            }),
            group([
              animate(
                '250ms ease-out',
                style({
                  transform: ' scale(.7)',
                })
              ),
              animate(
                '400ms',
                style({
                  opacity: 0,
                })
              ),
            ]),
          ]),

          query('.limit ', [
            style({
              position: 'absolute',
              top: 0,
              left: 0,
              overflow: 'hidden',
              'z-index': 1000,
              width: '100vw',
              height: '100vh',
            }),
          ]),

          query('.backgroudcircle ', [
            style({
              position: 'relative',
              'transform-origin': '50 50',
              left: '50vw',
              top: '50vh',
              opacity: 0,
              'border-radius': '50%',
              'background-color': 'var(--main-BE-color)',
              width: '1em',
              height: '1em',
            }),
            animate(
              '750ms ease-out',
              style({
                transform: 'scale(250)',
                opacity: 0.7,
              })
            ),
          ]),
        ]),
      ]),
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
