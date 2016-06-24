import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from '../models/beer';

@Pipe({
    name: 'beerstyleformatter'
})
export class BeerStyleFormatter implements PipeTransform {
    transform(beer: Beer): string {
        var style = beer.style;
        
        if (beer.substyle)
            style += ` - <small>${ beer.substyle }</small></span>`;
        
        return style;
    }
}