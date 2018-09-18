import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  tweetForm : FormGroup;

  constructor(fb : FormBuilder) {
    this.tweetForm = fb.group({
      "tweetdata" : ['',Validators.required]
    })
  }

  ngOnInit() {
  }
  onSubmit(){
    console.log(JSON.stringify(this.tweetForm.value)+"Tweet data posted successfully");
  }
}
