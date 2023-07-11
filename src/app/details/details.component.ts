import { ActivatedRoute } from '@angular/router';
import { Component,inject } from '@angular/core';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
    route: ActivatedRoute = inject(ActivatedRoute)
    housingLocationId = -1;

    constructor(){
      this.housingLocationId = Number(this.route.snapshot.params['id'])
    }
}
