import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateformatter'
})
export class DateFormatter implements PipeTransform {
    transform(date: Date): string {
        var now = new Date();
        var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        var yesterday = new Date(today.getDate() - 1)

        var formattedDate = "";
        if (date > today)
            formattedDate = "Vandaag";
        else if (date < today && date > yesterday)
            formattedDate = "Gisteren";
        else
        formattedDate = date.toLocaleDateString();
        
        return formattedDate + ` ${ date.getHours() }:${ date.getMinutes() }`;
    }
}