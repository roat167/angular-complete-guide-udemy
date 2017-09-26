import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform { //it need to have one method 'transform', so best practice using interface
    transform(value : any, limit: number, param2: any) { // you put sth you need to return (output) 
        if (value.length > limit) {
           return value.substr(0, 10) + "..."; // return the first 10 character back
        }
        return value;
    }
}