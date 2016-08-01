import {Component} from 'angular2/core';

@Component({
  selector: 'ng2-electron-app',
  template: `<h3>{{caption}}</h3>`
})

export class AppComponent{  
  private caption: string = "Hello from ng2.";
}