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
  editedProfileData : Object;
  options_gender : any;
  editBirthdate : boolean = true;
  genders = ['Male','Female'];
  relationships = ['Single','Married','Divorce','Widow'];
  userDetails: Object;
  profileUpdated: Object;
  display: boolean = false;

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
      "email" : [''],
      "username" : [''],
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
    this.editedProfileData = {
      user : this.editprofileForm.value
    };
    console.log(this.editprofileForm.value);
    this.apiService.editedProfileData(this.editprofileForm.value)
      .subscribe(
        (response) => {
          this.profileUpdated = response;
          console.log(response);
          this.showupdatedDialog();
          return;
        },
        (error) => {
          console.log(error+'Error occured')
        }  
    );
  }
  showupdatedDialog(){
    this.display = true;
  }
  ngOnInit() {
    this.apiService.editProfileRequest().subscribe(
      (response) => {
        this.userDetails = response['user'];
        this.editprofileForm.patchValue(this.userDetails)
      }
    )
  }

}
