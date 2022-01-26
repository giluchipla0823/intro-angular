import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloModule } from 'projects/hello/src/public-api';
// import { HelloModule } from 'hello';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HelloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
