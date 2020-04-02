import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular Basics 01';

  constructor() {
    this.changeTitle('new title2');
  }

  changeTitle(title:string){
    this.title = title;
  }
}
