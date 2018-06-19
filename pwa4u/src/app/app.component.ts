import { Component } from '@angular/core';
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
      transition('*=>*', [
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
          stagger('150ms', [
            animate(
              '250ms',
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
    ]),
  ],
})
export class AppComponent {
  constructor(private _router: Router) {}

  prepareRouteAnimation(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation'] || '';
  }
}
