import { Component, OnInit, Inject } from '@angular/core'
import { Http } from '@angular/http'

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html'
})

export class AppComponent {
    
    constructor(@Inject(Http) http) {
        
    }
}