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
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'x5-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [
    trigger('menuloading', [
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
              'background-color': 'var(--main-UX-color)',
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
export class HomepageComponent implements OnInit {
  menustate = 'notloaded';
  isDone = false;

  constructor(private _router: Router) {}

  ngOnInit() {
    this.menustate = 'loaded';
  }

  handleDone($event) {
    this.isDone = $event.toState !== 'loaded' ? true : false;
    if (this.menustate !== 'loaded' ) {
      this._router.navigate([this.menustate]);
    }
  }
  handleStart($event) {
    this.isDone = false;
  }

  onMenuClick(item) {
    this.menustate = item;
  }
}
