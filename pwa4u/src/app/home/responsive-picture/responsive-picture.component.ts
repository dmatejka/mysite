import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

type ResponsiveState = 'desktop' | 'mobile' | 'tablet';

@Component({
  selector: 'x5-responsive-picture',
  templateUrl: './responsive-picture.component.html',
  styleUrls: ['./responsive-picture.component.scss'],
})
export class ResponsivePictureComponent implements OnInit {
  @Input() resState: ResponsiveState = 'tablet';
  @Output() ResponsiveStateEmitted = new EventEmitter();
  responsiveNames: Array<ResponsiveState> = ['desktop', 'mobile', 'tablet'];

  constructor() {}

  ngOnInit() {}

  @HostListener('swiperight', ['$event.type'])
  @HostListener('swipeleft', ['$event.type'])
  swipe(e) {
    const currentIdx = this.responsiveNames.indexOf(this.resState);
    let newIdx = currentIdx;
    if (e === 'swiperight') {
      newIdx = currentIdx - 1 >= 0 ? currentIdx - 1 : 2;
    }
    if (e === 'swipeleft') {
      newIdx = currentIdx + 1 < 3 ? currentIdx + 1 : 0;
    }
    this.resState = this.responsiveNames[newIdx];
    this.ResponsiveStateEmitted.emit(this.resState);
  }
}
