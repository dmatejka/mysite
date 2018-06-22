import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { from, interval, zip } from 'rxjs';
import { NavItemComponent } from './nav-item/nav-item.component';

@Component({
  selector: 'x5-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('linkbar', { read: ElementRef })
  linkbar: ElementRef;
  @ViewChild('navbar') navbarEl: ElementRef;
  @ViewChildren(NavItemComponent, { read: ElementRef })
  navComponents: QueryList<ElementRef<NavItemComponent>>;

  activeNav: any;
  pointerState1 = 'DOWN';
  // pointerState2 = 'DOWN';
  pointerState3 = 'DOWN';
  pointerState4 = 'DOWN';
  pointerState5 = 'DOWN';

  @Input() direction = { from: 1, to: 1 };

  constructor(private _elementRef: ElementRef, private _ngZone: NgZone) {}

  ngOnInit() {}

  private _setStyles(element: ElementRef) {
    // const positions = this._inkBarPositioner(element);
    const linkbarnative: HTMLElement = this.linkbar.nativeElement;
    const elnative: HTMLElement = element.nativeElement;

    linkbarnative.style.transform = element
      ? // linkbarnative.style.left = element
        // ? (elnative.offsetLeft || 0) + 'px'
        'translateX(' + (elnative.offsetLeft || 0) + 'px)'
      : '0';
    linkbarnative.style.width = elnative
      ? (elnative.offsetWidth || 0) + 'px'
      : '0';
  }

  getElementDim(inavitem) {
    // console.log('element', el);
    // console.log(el.offsetWidth);
    // console.log(
    //   this.linkbar.nativeElement
    //   ? (this.linkbar.nativeElement.offsetLeft || 0) + 'px'
    //   : '0'
    // );
    // console.log('elements', this.navComponents);
    // const each = this.navComponents.map(n => {
    //   console.log(n);
    //   return n.nativeElement.attributes.link.value;
    // });
    // console.log('element EACH', each);
    // const each = this.navComponents.forEach(item =>
    //   console.log('element EACH', item)
    // );
    // const found = this.navComponents.forEach(item => item.nativeElement);
    const found = this.navComponents.find(
      (item, idx, arr) => arr[idx] === arr[inavitem]
    );
    console.log('element found', found);

    if (typeof requestAnimationFrame !== 'undefined') {
      //   this._ngZone.runOutsideAngular(() => {
      //     requestAnimationFrame(() => this._setStyles(found));
      //   });
      // } else {
      this._setStyles(found);
    }

    // const method = (element: HTMLElement) => ({
    //   left: element ? (element.offsetLeft || 0) + 'px' : '0',
    //   width: element ? (element.offsetWidth || 0) + 'px' : '0',
    //  });

    //   return method;
  }

  ngAfterViewInit(): void {
    // this.navComponents.changes.subscribe(items => console.log(items));
    // this.getElementDim();
    console.log(this.navbarEl.nativeElement);
    console.log(this.navComponents.toArray());
  }

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

      // navsequence$.subscribe(data => {
      //   if (data === 1) {
      //     this.pointerState1 = this.direction.to === 1 ? 'active' : dir;
      //   }
      //   if (data === 2) {
      //     this.pointerState2 = this.direction.to === 2 ? 'active' : dir;
      //   }
      //   if (data === 3) {
      //     this.pointerState3 = this.direction.to === 3 ? 'active' : dir;
      //   }
      //   if (data === 4) {
      //     this.pointerState4 = this.direction.to === 4 ? 'active' : dir;
      //   }
      //   if (data === 5) {
      //     this.pointerState5 = this.direction.to === 5 ? 'active' : dir;
      //   }
      // });
    }
  }
}
