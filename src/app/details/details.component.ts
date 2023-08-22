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
          firstName:[''],
          lastName:[''],
          email:['']
      })
    }

    SendForm():void{
      if(this.applyForm.valid){
        console.log(this.applyForm.value);
      }else{
        this.applyForm.markAllAsTouched()
      }
    }

    //get value and errors
    get firstName(){
      return this.applyForm.get('firstName')
    }

    get lastName(){
      return this.applyForm.get('lastName')
    }

    get email(){
      return this.applyForm.get('email')
    }
}
