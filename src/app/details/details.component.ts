import { ActivatedRoute } from '@angular/router';
import { Component,inject } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
    route: ActivatedRoute = inject(ActivatedRoute)
    housingLocationId = -1;

    constructor(){
      
    }
}
