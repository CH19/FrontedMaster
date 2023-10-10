import { Component } from '@angular/core';
import { HAMMER_LOADER } from '@angular/platform-browser';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(ngbConfig: NgbConfig) {
    ngbConfig.animation = false;
  }
  colocar(){
    const body =     document.querySelector('body');
    if(body)     body.style.background = 'orange';
  }
}
