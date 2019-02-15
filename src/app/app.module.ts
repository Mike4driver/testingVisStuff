import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {VisModule} from 'ngx-vis'

import { AppComponent } from './app.component';
import { VisCompComponent } from './vis-comp/vis-comp.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    VisCompComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    VisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
