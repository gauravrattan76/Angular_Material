import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularMaterial';
  notification =0;
  spinValue = false;

  onClick(){
    this.spinValue = true;
    setTimeout(() => {
      this.spinValue = false;
    }, 5000);
  }
}
