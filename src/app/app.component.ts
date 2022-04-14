import { Component,OnInit,isDevMode } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prod-app';
  userName: string = "Jhon Mathew"
  value:string="";

  constructor() {
    this.value = environment.value;
    console.log(environment.production);
  }
  ngOnInit() {
    if (isDevMode()) {
      console.log('Development!');
    } else {
      console.log('Production!');
    }
  }
}
