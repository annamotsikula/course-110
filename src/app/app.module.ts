import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LowstockDirective } from './core/directives/lowstock.directive';
import { TruncatePipe } from './core/pipes/truncate.pipe';

const components = [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  CardComponent,
  DashboardComponent,
];
const directives = [LowstockDirective];
const pipes = [TruncatePipe];

@NgModule({
  declarations: [...components, ...directives, ...pipes],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
