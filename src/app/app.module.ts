import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageboxComponent } from './components/imagebox/imagebox.component';
import { ImageService } from './image.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageboxComponent,
    ImageService
  ],
  imports: [
    BrowserModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
