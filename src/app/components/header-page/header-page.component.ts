import { Component, OnInit } from '@angular/core';
// import * as Skrollr from 'skrollr';

@Component({
  selector: 'redsoft-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToNextSection() {
    const elementToScrollTo = document.getElementById('whatWeDo');
    elementToScrollTo.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

}
