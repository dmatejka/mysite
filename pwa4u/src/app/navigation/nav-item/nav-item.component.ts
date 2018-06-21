import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'x5-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  animations: [
    trigger('animatePointer', [
      state(
        'DOWN',
        style({
          transform: 'translateX(-100%)',
          opacity: 1,
        })
      ),

      state(
        'UP',
        style({
          transform: 'translateX(100%)',
          opacity: 1,
        })
      ),

      state(
        'active',
        style({
          transform: 'translateX(0%)',
          opacity: 1,
        })
      ),

      state(
        'NONE',
        style({
          transform: 'translateX(0%)',
          opacity: 0,
        })
      ),

      transition('UP => DOWN', [animate(250)]),

      transition('DOWN => UP', [animate(250)]),

      transition('NONE => DOWN', [
        style({
          transform: 'translateX(100%)',
        }),
        animate(250),
      ]),

      transition('NONE => UP', [
        style({
          transform: 'translateX(-100%)',
        }),
        animate(250),
      ]),

      transition('NONE => active', [
        style({
          transform: 'translateX(0%)',
          opacity: 0,
        }),
        animate(250),
      ]),

      transition('active => DOWN', [
        style({
          // transform: 'translateX(0%)',
        }),
        animate(250),
      ]),

      transition('active => UP', [
        style({
          // transform: 'translateX(0%)',
        }),
        animate(250),
      ]),

      // transition('* => active', animate(250)),
    ]),
  ],
})
export class NavItemComponent implements OnInit {
  @Input() link: string;
  @Input() title: string;
  @Input() state: number;

  constructor() {}

  ngOnInit() {}
}
