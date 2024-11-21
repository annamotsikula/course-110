import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

const components = [
  AppComponent,
];


@NgModule({
  declarations: [...components],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  // providers: [
  //   { provide: TestService, useClass: OldTestService }
  // ],
  bootstrap: [AppComponent],
})
export class AppModule {}
