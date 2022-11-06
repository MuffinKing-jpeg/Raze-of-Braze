import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ThemeBtnComponent} from './components/navbar/theme-btn/theme-btn.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {PlaceholderComponent} from './components/placeholder/placeholder.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import { LocaleBtnComponent } from './components/navbar/locale-btn/locale-btn.component';
import { MainPageComponent } from './components/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeBtnComponent,
    NavbarComponent,
    PlaceholderComponent,
    NotFoundComponent,
    LocaleBtnComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

