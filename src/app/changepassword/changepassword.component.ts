import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../core/services/api.service';
import { ChangepasswordValidator } from '../shared/changepassword.validator';
import { JwtService } from '../core/services/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  changePasswordForm : FormGroup;
  changePasswordData : Object;

  constructor(private apiService : ApiService,
              private jwtservice : JwtService,
              private router : Router,
              private fb : FormBuilder)
  {
    this.changePasswordForm = fb.group({
      "currentpassword" : ['',Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])],
      "newpassword" : ['',Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])],
      "confirmnewpassword" : ['',Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])]
    },
    {
      validator: ChangepasswordValidator.validate.bind(this)
    });

  }
  onSubmit(){
    console.log(this.changePasswordForm.value);

  }
  ngOnInit() {
  }

}
