import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/Serveces/register-service.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  register:FormGroup|any;

  constructor(
              public fb:FormBuilder , private _route:Router ,
              public registerService :RegisterServiceService
            ) {
              this.register = this.fb.group({
                name: '',
                year: '',
                stPhone: '',
                wPhone: '',
                paPhone: '',
                zone: '',
                covertant: '',
                senter:''
                })
             }

  ngOnInit(): void {

  }
  AddUserForm = new FormGroup ({
    "name": new FormControl(),
    "year": new FormControl(),
    "stPhone": new FormControl(),
    "wPhone": new FormControl(),
    "paPhone": new FormControl(),
    "zone": new FormControl(),
    "covertant": new FormControl(),
    "senter": new FormControl()
  });

  addUser(){
    // console.log(this.register);
      this.registerService.addSt(this.register.value).subscribe(
       {
        next(data){
          console.log(data);
           alert("you are successfully register ... ");
           window.location.href = "/welcome"  ;
        },
        error(err){
          console.log(err);
          alert('something went wrong !!!');
        }
       }

      )
  }
}
