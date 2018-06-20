import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'x5-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [trigger('menuloading', [])],
})
export class HomepageComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  onMenuClick(item) {
    this._router.navigate([item]);
  }
}
