import { FormGroup,FormBuilder,Validators } from '@angular/forms';
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
    housingLocation : Housinglocation | undefined ;
    applyForm:FormGroup;
    constructor(private formservice:FormBuilder){
      const housingLocationId = Number(this.route.snapshot.params['id'])
      this.housingLocation = this.housingService.getHousingLocationById(housingLocationId)

      this.applyForm = this.formservice.group({
          firstName:['',[Validators.required]],
          lastName:['',[Validators.required]],
          email:['',[Validators.required]]
      })
    }

    SendForm(firstName:string,lastName:string,email:string):void{
      console.log("aqui se envian los datos del formulario")
    }
}
