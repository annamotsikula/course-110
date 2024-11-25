import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const components = [
  AppComponent,
];


@NgModule({
  declarations: [...components, NotFoundPageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  // providers: [
  //   { provide: TestService, useClass: OldTestService }
  // ],
  bootstrap: [AppComponent],
})
export class AppModule {}
