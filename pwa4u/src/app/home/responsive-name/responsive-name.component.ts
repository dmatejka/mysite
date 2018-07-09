import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostListener, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

type ResponsiveState = 'desktop' | 'mobile' | 'tablet';

@Component({
  selector: 'x5-responsive-name',
  templateUrl: './responsive-name.component.html',
  styleUrls: ['./responsive-name.component.scss'],
  animations: [
    trigger('responsiveNameState', [
      state(
        'inactiveL',
        style({
          filter: 'blur(1px)',
          opacity: 0.7,
          transform: 'translateX(-8em)',
        })
      ),
      state(
        'inactiveR',
        style({
          filter: 'blur(1px)',
          opacity: 0.7,
          transform: 'translateX(3em)',
        })
      ),
      state(
        'active',
        style({
          filter: 'blur(0)',
          opacity: 1,
          transform: 'translateX(-2.5em)',
        })
      ),

      transition('inactiveL => inactiveR', [
        animate(
          250,
          style({
            // transform: 'scale(0)',
            transform: 'translateX(-13.5em)',
            opacity: 0,
          })
        ),
      ]),
      transition('inactiveR => inactiveL', [
        animate(
          250,
          style({
            // transform: 'scale(0)',
            transform: 'translateX(8.5em)',
            opacity: 0,
          })
        ),
      ]),

      transition('active <=> *', [animate(350)]),
    ]),

    trigger('responsiveIconState', [
      state(
        'inactive',
        style({
          filter: 'blur(3px)',
          opacity: 0,
          transform: 'translateX(-50%) scale(0)',
        })
      ),

      state(
        'active',
        style({
          filter: 'blur(0)',
          opacity: 1,
          transform: 'translateX(-50%) scale(1)',
        })
      ),

      transition('active <=> *', [animate(350)]),
    ]),
  ],
})
export class ResponsiveNameComponent implements OnInit {
  @Input() state: ResponsiveState = 'tablet';
  @Output() ResponsiveStateEmitted = new EventEmitter();

  responsiveNames: Array<ResponsiveState> = ['desktop', 'tablet', 'mobile'];
  constructor() {}

  ngOnInit() {}

  @HostListener('swiperight', ['$event.type'])
  @HostListener('swipeleft', ['$event.type'])
  swipe(e) {
    console.log('inner swipe', { e });
    const currentIdx = this.responsiveNames.indexOf(this.state);
    console.log('currentIdx', currentIdx, this.responsiveNames[currentIdx]);
    let newIdx = currentIdx;
    if (e === 'swiperight') {
      newIdx = currentIdx - 1 >= 0 ? currentIdx - 1 : 2;
    }
    if (e === 'swipeleft') {
      newIdx = currentIdx + 1 < 3 ? currentIdx + 1 : 0;
    }
    console.log('newIdx', newIdx, this.responsiveNames[newIdx]);
    this.state = this.responsiveNames[newIdx];
  }

  changeState(s) {
    this.ResponsiveStateEmitted.emit(s);
    this.state = s;
  }
}
