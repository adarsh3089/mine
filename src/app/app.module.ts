import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { graphModule } from '../charts/charts.module';
// import { ChartjsBarHorizontalComponent } from '../charts/chartjs/chartjs-bar-horizontal.component';

@NgModule({
  declarations: [
    AppComponent,
    // ChartjsBarHorizontalComponent
  ],
  imports: [
    BrowserModule,
    graphModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
