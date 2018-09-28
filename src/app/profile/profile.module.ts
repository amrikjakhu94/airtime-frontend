import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { TweetsComponent } from './tweets/tweets.component';
import { RetweetsComponent } from './retweets/retweets.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';
import { ProfileRoutingModule } from './profile-routing.module'
import { SharedModule } from '../shared/shared.module';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { LikesComponent } from './likes/likes.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    ProfileComponent,
    TweetsComponent,
    RetweetsComponent,
    FollowersComponent,
    FollowingComponent,
    EditprofileComponent,
    LikesComponent
  ]
})
export class ProfileModule { }
