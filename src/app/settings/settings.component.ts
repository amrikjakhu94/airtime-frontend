import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  editprofileForm : FormGroup;
  editprofileData : Object;
  options_gender : any;
  editBirthdate : boolean = true;
  genders = ['Male','Female'];
  relationships = ['Single','Married','Divorce','Widow'];

  constructor(private apiService : ApiService,private fb : FormBuilder){
    this.editprofileForm = fb.group({
      "firstname" : ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      "lastname" : ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      "birthday" : ['',Validators.required],
      "contact" : ['',Validators.pattern(/^\d{3}\d{3}\d{4}$/)],
      "bio" : [''],
      "gender" : ['',Validators.required],
      "relationship" : ['',Validators.required]
    });
  }

  editBirthday(){
    this.editBirthdate = false;
  }

  onSubmit(){
    //console.log(this.signupForm.value);
    //console.log(JSON.stringify(this.signupForm.value)+"Form submitted successfully");
    this.editprofileData = {
      user : this.editprofileForm.value
    };
    console.log(this.editprofileData);
    this.apiService.editProfileRequest(this.editprofileData)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error+'Error occured')
    );
  }

  ngOnInit() {
  //   this.options_gender = [{
  //     name: '12Male',
  //     value: '12Male'
  //  }, {
  //     name: '12Female',
  //     value: '12Female'
  //  }];
  //  this.editprofileForm = this.fb.group({
  //   gender: ['Male12']
  // });
  }

}
