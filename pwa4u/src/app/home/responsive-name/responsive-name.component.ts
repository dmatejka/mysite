import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

type ResponsiveState = 'desktop' | 'mobile' | 'tablet';

@Component({
  selector: 'x5-responsive-name',
  templateUrl: './responsive-name.component.html',
  styleUrls: ['./responsive-name.component.scss'],
  animations: [
    trigger('responsiveState', [
      state(
        'inactiveL',
        style({
          filter: 'blur(2px)',
          opacity: 0.7,
          transform: 'translateX(-8em) scale(1)',
        })
      ),
      state(
        'inactiveR',
        style({
          filter: 'blur(2px)',
          opacity: 0.7,
          transform: 'translateX(3em) scale(1)',
        })
      ),
      state(
        'active',
        style({
          filter: 'blur(0)',
          opacity: 1,
          transform: 'translateX(-2.5em) scale(1)',
        })
      ),

      transition('inactiveL <=> inactiveR', [
        animate(
          250,
          style({
            transform: 'scale(0)',
            opacity: 0,
          })
        ),
      ]),

      transition('active <=> *', [animate(350)]),
    ]),
  ],
})
export class ResponsiveNameComponent implements OnInit {
  @Input() state: ResponsiveState = 'tablet';
  @Output() ResponsiveStateEmitted = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  changeState(s) {
    this.ResponsiveStateEmitted.emit(s);
    this.state = s;
  }
}
