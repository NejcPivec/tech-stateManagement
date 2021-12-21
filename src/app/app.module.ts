import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store";
import {galleryReducer} from "./gallery/store/gallery.reducer";
import {HttpClientModule} from "@angular/common/http";
import {GalleryService} from "./gallery/gallery.service";
import {FormsModule} from "@angular/forms";
import { ClassicComponent } from './classic/classic.component';
import { StateComponent } from './state/state.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    ClassicComponent,
    StateComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ gallery: galleryReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true, }),// Pauses recording actions and state changes when the extension window is not open
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'classic', component: ClassicComponent},
      {path: 'state', component: StateComponent},
    ]),
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
