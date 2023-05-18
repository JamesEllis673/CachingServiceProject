import { HttpClient, HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LocalCachingComponent } from './local-caching/local-caching.component';
import { SessionDataCachingComponent } from './session-data-caching/session-data-caching.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalCachingComponent,
    SessionDataCachingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
