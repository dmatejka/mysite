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
import { from, interval, of, zip } from 'rxjs';
import { delay, share } from 'rxjs/operators';

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
        query('.Main-detail', animate('350ms')),

        // *** LIST ITEMS ***
        group([
          query('.Detail-image', animate('250ms')),
          query(
            '.List-item',

            stagger('100ms cubic-bezier(0.35, 0, 0.25, 1)', animate('350ms'))
          ),
          query('.TextContent-line', stagger(50, animate('200ms'))),
        ]),
      ]),
    ]),
  ],
})
export class ResponsivePictureComponent implements OnInit {
  @Input() resState: ResponsiveState = 'tablet';
  @Output() ResponsiveStateEmitted = new EventEmitter();

  responsiveNames: Array<ResponsiveState> = ['mobile', 'tablet', 'desktop'];

  private timer$ = interval(2000); // timeer to swith between responsive type
  private changePictures$ = zip(
    from(this.responsiveNames),
    this.timer$,
    (o, t) => o
  ).pipe(delay(1000)); // delay to start changing responsive Names

  public constructingState = of(true).pipe(
    delay(3500),
    share()
  ); // delay to start constructing responsive picture

  constructor() {}

  ngOnInit() {
    this.changePictures$.subscribe(val => {
      this.ResponsiveStateEmitted.emit(val);
    });
  }

  @HostListener('swiperight', ['$event.type'])
  @HostListener('swipeleft', ['$event.type'])
  swipe(e) {
    const currentIdx = this.responsiveNames.indexOf(this.resState);
    let newIdx = currentIdx;
    if (e === 'swipeleft') {
      newIdx = currentIdx - 1 >= 0 ? currentIdx - 1 : 2;
    }
    if (e === 'swiperight') {
      newIdx = currentIdx + 1 < 3 ? currentIdx + 1 : 0;
    }
    this.resState = this.responsiveNames[newIdx];
    this.ResponsiveStateEmitted.emit(this.resState);
  }
}
