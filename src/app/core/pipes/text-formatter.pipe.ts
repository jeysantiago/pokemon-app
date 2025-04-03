import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormatter'
})
export class TextFormatterPipe implements PipeTransform {

  transform(value: string): unknown {
    return value.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

}
