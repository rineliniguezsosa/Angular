import { ActivatedRoute } from '@angular/router';
import { Component,inject } from '@angular/core';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
    route: ActivatedRoute = inject(ActivatedRoute)
    housingService = inject(HousingService);
    housingLocation = Housinglocation | undefined ;

    constructor(){
      this.housingLocationId = Number(this.route.snapshot.params['id'])
    }
}
