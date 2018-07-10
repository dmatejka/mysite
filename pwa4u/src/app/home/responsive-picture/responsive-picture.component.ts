import { Component, Input, OnInit } from '@angular/core';

type ResponsiveState = 'desktop' | 'mobile' | 'tablet';

@Component({
  selector: 'x5-responsive-picture',
  templateUrl: './responsive-picture.component.html',
  styleUrls: ['./responsive-picture.component.scss'],
})
export class ResponsivePictureComponent implements OnInit {
  @Input() resState: ResponsiveState = 'tablet';

  constructor() {}

  ngOnInit() {}
}
