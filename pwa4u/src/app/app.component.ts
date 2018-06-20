import { Component, OnInit } from '@angular/core';
import {
  animate,
  group,
  keyframes,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '../../node_modules/@angular/animations';
import { Router, RouterOutlet } from '../../node_modules/@angular/router';

@Component({
  selector: 'x5-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('menuloading', [
      transition('*=>loaded', [
        group([
          query('.container', [
            style({
              transform: 'scale(.1) rotate(-360deg)',
            }),
            animate(
              '450ms',
              keyframes([
                style({ transform: 'scale(0.1) rotate(-360deg)', offset: 0 }),
                style({ transform: 'scale(0.5) rotate(-45deg)', offset: 0.75 }),
                style({ transform: 'scale(1) rotate(0deg)', offset: 1.0 }),
              ])
            ),
          ]),
          query('.container div', [
            style({
              'border-radius': '33%',
            }),
            animate(
              '550ms',
              style({
                'border-radius': '0%',
              })
            ),
          ]),
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
          ])
        ),
      ]),

      transition('*=>UX', [
        group([
          query('.container div', [
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

          query('.backgroudcircle ', [
            style({
              position: 'absolute',
              'z-index': 1000,
              opacity: 0,
              'border-radius': '50%',
              'background-color': 'var(--main-UX-color)',
              width: '1em',
              height: '1em',
            }),
            animate(
              '650ms ease-out',
              style({
                transform: 'scale(500)',
                opacity: 0.7,
              })
            ),
          ]),
        ]),
        query('.container ', [style({ opacity: 0 })]),
      ]),

      transition('*=>FE', [
        group([
          query('.container div', [
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

          query('.backgroudcircle ', [
            style({
              position: 'absolute',
              'z-index': 1000,
              opacity: 0,
              'border-radius': '50%',
              'background-color': 'var(--main-FE-color)',
              width: '1em',
              height: '1em',
            }),
            animate(
              '650ms ease-out',
              style({
                transform: 'scale(500)',
                opacity: 0.7,
              })
            ),
          ]),
        ]),
        query('.container ', [style({ opacity: 0 })]),
      ]),

      transition('*=>SL', [
        group([
          query('.container div', [
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

          query('.backgroudcircle ', [
            style({
              position: 'absolute',
              'z-index': 1000,
              opacity: 0,
              'border-radius': '50%',
              'background-color': 'var(--main-SL-color)',
              width: '1em',
              height: '1em',
            }),
            animate(
              '650ms ease-out',
              style({
                transform: 'scale(500)',
                opacity: 0.7,
              })
            ),
          ]),
        ]),
        query('.container ', [style({ opacity: 0 })]),
      ]),

      transition('*=>BE', [
        group([
          query('.container div', [
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

          query('.backgroudcircle ', [
            style({
              position: 'absolute',
              'z-index': 1000,
              opacity: 0,
              'border-radius': '50%',
              'background-color': 'var(--main-BE-color)',
              width: '1em',
              height: '1em',
            }),
            animate(
              '650ms ease-out',
              style({
                transform: 'scale(500)',
                opacity: 0.7,
              })
            ),
          ]),
        ]),
        query('.container ', [style({ opacity: 0 })]),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  menustate = 'notloaded';
  constructor(private _router: Router) {}

  ngOnInit() {
    this.menustate = 'loaded';
  }

  onMenuClick(item) {
    this.menustate = item;
  }

  prepareRouteAnimation(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation'] || '';
  }
}
