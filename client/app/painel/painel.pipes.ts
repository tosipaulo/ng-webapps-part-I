import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'substring'
})

export class SubstringPipe implements PipeTransform{

    transform(titulo: any, number: any) {
            return titulo.length > number
                ? titulo.substring(0, 7) + '...'
                : titulo
    }

}

