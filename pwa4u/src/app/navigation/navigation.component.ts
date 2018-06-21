import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { from, interval, zip } from 'rxjs';

@Component({
  selector: 'x5-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnChanges {
  activeNav: any;
  pointerState1 = 'DOWN';
  pointerState2 = 'DOWN';
  pointerState3 = 'DOWN';
  pointerState4 = 'DOWN';
  pointerState5 = 'DOWN';

  @Input() direction = { from: 1, to: 1 };

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.direction && this.direction.to - this.direction.from !== 0) {
      const count = Math.abs(this.direction.to - this.direction.from) + 1 || 0;
      const dir =
        Number(this.direction.to) - Number(this.direction.from) > 0
          ? 'UP'
          : 'DOWN';

      // generate sequence from – to, based on navigation from – to
      const seq = Array.from(
        { length: count },
        (v, i) =>
          this.direction.to - this.direction.from > 0
            ? this.direction.from + i
            : this.direction.from - i
      );

      // emit every 1s
      const timer$ = interval(125);

      const source$ = from(seq);

      // Observable that emits each timeer tick and completes at SOURCE end
      const navsequence$ = zip(source$, timer$, (o, t) => o);

      navsequence$.subscribe(data => {
        if (data === 1) {
          this.pointerState1 = this.direction.to === 1 ? 'active' : dir;
        }
        if (data === 2) {
          this.pointerState2 = this.direction.to === 2 ? 'active' : dir;
        }
        if (data === 3) {
          this.pointerState3 = this.direction.to === 3 ? 'active' : dir;
        }
        if (data === 4) {
          this.pointerState4 = this.direction.to === 4 ? 'active' : dir;
        }
        if (data === 5) {
          this.pointerState5 = this.direction.to === 5 ? 'active' : dir;
        }
      });
    }
  }
}
