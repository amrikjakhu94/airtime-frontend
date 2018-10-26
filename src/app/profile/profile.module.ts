import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CropperModule } from 'ngx-cropper';
import { FileUploadModule } from 'primeng/fileupload';

import { ProfileComponent } from './profile.component';
import { TweetsComponent } from './tweets/tweets.component';
import { RetweetsComponent } from './retweets/retweets.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';
import { ProfileRoutingModule } from './profile-routing.module'
import { SharedModule } from '../shared/shared.module';
import { LikesComponent } from './likes/likes.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CropperModule,
    FileUploadModule,
    DialogModule,
    ButtonModule
  ],
  declarations: [
    ProfileComponent,
    TweetsComponent,
    RetweetsComponent,
    FollowersComponent,
    FollowingComponent,
    LikesComponent
  ]
})
export class ProfileModule { }
