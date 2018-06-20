import { Component, OnInit } from '@angular/core';
import {
  animate,
  query,
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
    trigger('routeAnimations', [
      transition('* => basic', [
        query(
          ':enter',
          [
            animate(
              '250ms',
              style({
                opacity: 1,
              })
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  prepareRouteAnimation(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation'] || 'basic';
  }
}
