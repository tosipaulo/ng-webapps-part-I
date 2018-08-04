import {NgModule} from '@angular/core'
import { PainelComponent } from './painel.component';
import { SubstringPipe } from './painel.pipes';

@NgModule({
    declarations: [ PainelComponent, SubstringPipe],
    exports: [PainelComponent]
})
export class PainelModule {

}