import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { from, interval, zip } from 'rxjs';

@Component({
  selector: 'x5-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnChanges {
  activeNav: any;
  pointerState1 = 'NONE';
  pointerState2 = 'NONE';
  pointerState3 = 'NONE';
  pointerState4 = 'NONE';
  pointerState5 = 'NONE';

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
      console.log('this.direction', this.direction);

      console.log('direction', dir);

      // generate sequence from – to, based on navigation from – to
      const seq = Array.from(
        { length: count },
        (v, i) =>
          this.direction.to - this.direction.from > 0
            ? this.direction.from + i
            : this.direction.from - i
      );

      // emit every 1s
      const timer$ = interval(250);

      const source$ = from(seq);

      // Observable that emits each timeer tick and completes at SOURCE end
      const navsequence$ = zip(source$, timer$, (o, t) => o);

      navsequence$.subscribe(data => {
        console.log(data, dir);
        console.log(
          'from:',
          this.pointerState1,
          this.pointerState2,
          this.pointerState3,
          this.pointerState4,
          this.pointerState5
        );
        this.pointerState1 =
          data === 1
            ? Number(this.direction.to) === 1
              ? 'active'
              : dir
            : 'NONE';
        this.pointerState2 =
          data === 2
            ? Number(this.direction.to) === 2
              ? 'active'
              : dir
            : 'NONE';
        this.pointerState3 =
          data === 3
            ? Number(this.direction.to) === 3
              ? 'active'
              : dir
            : 'NONE';
        this.pointerState4 =
          data === 4
            ? Number(this.direction.to) === 4
              ? 'active'
              : dir
            : 'NONE';
        this.pointerState5 =
          data === 5
            ? Number(this.direction.to) === 5
              ? 'active'
              : dir
            : 'NONE';

        console.log(
          'to:',
          this.pointerState1,
          this.pointerState2,
          this.pointerState3,
          this.pointerState4,
          this.pointerState5
        );
      });
    }
  }
}
