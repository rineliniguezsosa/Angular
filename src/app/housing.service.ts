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

  getHousingLocationById(id: number) {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }
}
