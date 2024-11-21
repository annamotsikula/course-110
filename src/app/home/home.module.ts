import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CardComponent } from '../card/card.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { LowstockDirective } from '../core/directives/lowstock.directive';
import { TruncatePipe } from '../core/pipes/truncate.pipe';
import { HomeComponent } from './home.component';
import { AboutComponent } from '../about/about.component';

const directives = [LowstockDirective];
const pipes = [TruncatePipe];

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    DashboardComponent,
    CardComponent,
    ...pipes,
    ...directives
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  exports: [
    ...pipes,
    ...directives,
    CardComponent,

  ]
})
export class HomeModule { }
