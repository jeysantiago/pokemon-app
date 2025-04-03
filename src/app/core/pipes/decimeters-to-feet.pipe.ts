import { Pipe, PipeTransform } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Pipe({
  name: 'decimetersToFeet'
})
export class DecimetersToFeetPipe implements PipeTransform {

  constructor(
    private utilsService: UtilsService
  ) {}

  transform(value: number) {
    return this.utilsService.decimetersToFeet(value);
  }

}
