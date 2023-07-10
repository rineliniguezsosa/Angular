import { Component } from '@angular/core';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  housingLocationList : Housinglocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: 'https://i.insider.com/5b9137e10ce5f5b27e8b4a0c?width=700',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: 'https://i.insider.com/5b9137e10ce5f5b27e8b4a0c?width=700',
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: 'https://i.insider.com/5b9137e10ce5f5b27e8b4a0c?width=700',
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: 'https://i.insider.com/5b9137e10ce5f5b27e8b4a0c?width=700',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: 'https://i.insider.com/5b9137e10ce5f5b27e8b4a0c?width=700',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://i.insider.com/5b9137e10ce5f5b27e8b4a0c?width=700',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://i.insider.com/5b9137e10ce5f5b27e8b4a0c?width=700',
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://i.insider.com/5b9137e10ce5f5b27e8b4a0c?width=700',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://i.insider.com/5b9137e10ce5f5b27e8b4a0c?width=700',
      availableUnits: 10,
      wifi: false,
      laundry: false
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: 'https://i.insider.com/5b9137e10ce5f5b27e8b4a0c?width=700',
      availableUnits: 6,
      wifi: true,
      laundry: true
    }
  ];
  public value = "rinel iñiguez" //Propiedad vinculada
}
