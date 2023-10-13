import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MdbCarouselComponent } from 'mdb-angular-ui-kit/carousel';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChild('carousel') carousel!: MdbCarouselComponent;

  constructor() {}

  ngAfterViewInit(): void {
    this.carousel.stop();
  }
}
