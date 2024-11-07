import { Component } from '@angular/core';
import { Product } from './app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent  {
  title: string = 'angular-module-course-110';
  year = 2024;
  isWinter: boolean = false;

  lang: Array<string|number|boolean> = ['JS', 'TS', 'C#', 'C++']  // Array<string|number|boolean> == string|number|boolean[]
  /* string|number|boolean[] ===>>> lang = 'JS'; lang = 10; lang = [false, true]  */
  framework: Array<any> = ['Angular', 'Vue', 'React']   // any[] | Array<any>




  constructor() {
    this.year = 2025
    this.setYear(20)
  }

  getYear(): number {
    return this.year
  }

  setYear(num: number) {
    return this.year + num
  }


}