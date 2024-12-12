import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HttpClientModule } from '@angular/common/http';
import { api_url_token } from './core/constants/constants';

const components = [
  AppComponent,
  NotFoundPageComponent, 
];


@NgModule({
  declarations: [...components],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    // { provide: TestService, useClass: OldTestService }
    { provide: api_url_token, useValue: "https://dummyjson.com"}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
