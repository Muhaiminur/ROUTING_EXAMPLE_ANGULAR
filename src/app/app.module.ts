import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AndroidDetailsComponent } from './android-details/android-details.component';
import { AndroidNineComponent } from './android-nine/android-nine.component';
import { AndroidTenComponent } from './android-ten/android-ten.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    PageNotFoundComponent,
    AndroidDetailsComponent,
    AndroidNineComponent,
    AndroidTenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
