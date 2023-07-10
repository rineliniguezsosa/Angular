import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation'

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }

  getAllHousingLocations():Housinglocation[] {
    return this.housingLocationList;
  }
}
