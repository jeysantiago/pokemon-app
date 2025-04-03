import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  extractPokemonIdFromUrl(url: string): number {
    const urlParts = url.split('/');
    return parseInt(urlParts[urlParts.length - 2]);
  }

  decimetersToFeet(decimeters: number): number {
    const centimeters = decimeters * 10;
    const inches = centimeters / 2.54;
    const feet = inches / 12;
    return parseFloat(feet.toFixed(2));
  }

  hectogramsToKilograms(hectograms: number): number {
    return hectograms / 10;
  }
}
