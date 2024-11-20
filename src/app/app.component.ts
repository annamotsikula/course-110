import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  today = new Date();

  constructor() {

  }

  test = {
    result: 90,
    highScore: 150,
  };
  title: string = 'Angular CoUrSe'
  calculation: number = 43.483949369;
  clickMe() {
    console.log(this.calculation);
  }
}
