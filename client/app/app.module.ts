import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { FotoModule } from './foto/foto.module'

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, FotoModule],
    declarations: [ AppComponent ],
    bootstrap: [AppComponent]
})

export class AppModule {

}