import {
  animate,
  group,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { interval, of, Subject } from 'rxjs';
import { delay, share, take, takeUntil } from 'rxjs/operators';

type ResponsiveState = 'desktop' | 'mobile' | 'tablet';

@Component({
  selector: 'x5-responsive-picture',
  templateUrl: './responsive-picture.component.html',
  styleUrls: ['./responsive-picture.component.scss'],
  animations: [
    trigger('constructing', [
      // state(
      //   'deconstructed',
      //   style({
      //     transform: 'translate3d(-0.5em, -0.2em, 2em)',
      //     'box-shadow': '9px 16px 18px #88888881',
      //     // 'z-index': 10000,
      //     // opacity: 0,
      //   })
      // ),

      // state(
      //   'constructed',
      //   style({
      //     transform: 'translate3d(0em, 0em, 0em)',
      //     'box-shadow': 'none',
      //     // 'z-index': 1,
      //     // opacity: 1,
      //   })
      // ),

      transition('* => *', [
        // *** SET UP transparency
        query('.Nav-item', [
          style({
            transform: 'translateX(5em)',
            // opacity: 0,
          }),
        ]),
        query('.TextContent-line', [
          style({
            opacity: 0,
            transform: 'translate3d(-0.5em, -0.2em, 2em)',
          }),
        ]),
        query('.Main-detail, .Header-title', [
          style({
            transform: 'translateX(-15em)',
          }),
        ]),
        query('.Detail-image', [
          style({
            transform: 'translate3d(-0.5em, -0.2em, 2em)',
            'box-shadow': '9px 16px 18px #88888881',
            opacity: 0,
          }),
        ]),
        query('.List-item, .FooterNav-item', [
          style({
            transform: 'translate3d(-0.5em, -0.2em, 2em)',
            'box-shadow': '9px 16px 18px #88888881',
            opacity: 0,
          }),
        ]),

        // *** NAVIGATION ***
        group([
          query('.Header-title', animate('650ms')),
          query('.Nav-item', stagger(250, animate('950ms'))),
          query('.FooterNav-item', stagger(250, animate('950ms'))),
        ]),
        // *** DETAIL ***
        query('.Main-detail', animate('450ms')),

        group([
          // *** IMAGE ***
          query('.Detail-image', animate('350ms 550ms')),
          // *** LIST ITEMS ***
          query(
            '.List-item',

            stagger('250ms cubic-bezier(0.35, 0, 0.25, 1)', animate('450ms'))
          ),
          query('.TextContent-line', stagger(150, animate('250ms'))),
        ]),
      ]),
    ]),
  ],
})
export class ResponsivePictureComponent implements OnInit {
  @Input() resState: ResponsiveState = 'tablet';
  @Output() ResponsiveStateEmitted = new EventEmitter();

  responsiveNames: Array<ResponsiveState> = ['tablet', 'desktop', 'mobile'];

  private timer$ = interval(3500); // timeer to swith between responsive type
  private swiping = new Subject();

  public constructingState = of(true).pipe(
    delay(2500), // delay to start constructing responsive picture
    share()
  );

  constructor() {}

  ngOnInit() {
    this.timer$
      .pipe(
        take(3),
        delay(2500),
        takeUntil(this.swiping)
      )
      .subscribe(val => {
        const currentIdx = this.responsiveNames.indexOf(this.resState);
        console.log('currentIdx', currentIdx);
        let newIdx = currentIdx;
        newIdx = currentIdx + 1 <= 2 ? currentIdx + 1 : 0;
        console.log('newIdx', newIdx);
        this.resState = this.responsiveNames[newIdx];
        this.ResponsiveStateEmitted.emit(this.resState);
      });
  }

  @HostListener('swiperight', ['$event.type'])
  @HostListener('swipeleft', ['$event.type'])
  swipe(e) {
    this.swiping.next();
    const currentIdx = this.responsiveNames.indexOf(this.resState);
    let newIdx = currentIdx;
    if (e === 'swipeleft') {
      newIdx = currentIdx - 1 >= 0 ? currentIdx - 1 : 2;
    }
    if (e === 'swiperight') {
      newIdx = currentIdx + 1 <= 2 ? currentIdx + 1 : 0;
    }
    this.resState = this.responsiveNames[newIdx];
    this.ResponsiveStateEmitted.emit(this.resState);
  }
}
