import { Component, OnInit, AfterContentInit } from '@angular/core';
import * as Parallax from 'parallax-js';
import * as Skrollr from 'skrollr';

import { HeaderPageComponent } from './components/header-page/header-page.component';

// export const Parallax: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit{

  title = 'redsoft';

  ngOnInit(): void {
    Skrollr.init();
  }

  ngAfterContentInit(): void {
    // const scene = document.getElementById('scene');
    // const parallaxInstance = new Parallax(scene, {
    //   relativeInput: true,
    //   hoverOnly: true
    // });
  }
  
}
