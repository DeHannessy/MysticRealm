import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PathFinderComponent } from './components/path-finder/path-finder.component';
import { RealmCreatorComponent } from './components/realm-creator/realm-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    PathFinderComponent,
    RealmCreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
