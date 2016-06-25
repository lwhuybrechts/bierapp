import { Pipe, PipeTransform } from '@angular/core';
import { Checkin } from '../models/checkin';

@Pipe({
    name: 'averageratingformatter'
})
export class AverageRatingFormatter implements PipeTransform {
    transform(checkins: Checkin[]): number {
        if (!checkins || checkins.length === 0)
            return 0;

        var ratings = checkins.map(checkin => checkin.rating);
        var sum = ratings.reduce((previous, current) => previous + current, 0);

        return sum / checkins.length;
    }
}