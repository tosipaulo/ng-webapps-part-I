import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'

import 'rxjs/add/operator/map'

import { FotoModule } from './foto/foto.module'
import { AppComponent } from './app.component';
import { PainelModule } from './painel/painel.module';

@NgModule({
    imports: [BrowserModule, FotoModule, HttpModule, PainelModule],
    declarations: [ AppComponent ],
    bootstrap: [AppComponent]
})

export class AppModule {

}