import { Component, Inject } from '@angular/core';
import { api_url_token } from './core/constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  today = new Date();

  constructor(@Inject(api_url_token) private url: string) {
    console.log(this.url)

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
