import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  options: AnimationOptions;

  constructor() {}

  ngOnInit(): void {
    this.options = { path: 'assets/animations/pagenotfound.json'};
  }
}
