import { Pipe, PipeTransform } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Pipe({
  name: 'hectogramsToKg'
})
export class HectogramsToKgPipe implements PipeTransform {

  constructor(
    private utilsService: UtilsService
  ) {}

  transform(value: number): number {
    return this.utilsService.hectogramsToKilograms(value);
  }

}
