import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

type ResponsiveState = 'desktop' | 'mobile' | 'tablet';

@Component({
  selector: 'x5-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [trigger('menuloading', [])],
})
export class HomepageComponent implements OnInit {
  public responsiveState: ResponsiveState = 'mobile';
  constructor(private _router: Router) {}

  ngOnInit() {}

  onMenuClick(item) {
    this._router.navigate([item]);
  }

  onResponsiveStateEmitted(e) {
    this.responsiveState = e;
    console.log('onResponsiveStateEmitted', this.responsiveState);
  }
}
