import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  time = ()=>{
    const date = new Date();
    const actualHours = date.getHours();
    if(actualHours >= 5 && actualHours <= 11 ){
      return 'Good morning';
    }else if(actualHours > 11 && actualHours <= 18){
      return 'Good afternoon';
    }else{
      return 'Good evening';
    };
  }
  icons = ['notifications-outline', 'refresh-outline', 'settings-outline']
  constructor() {}


}
