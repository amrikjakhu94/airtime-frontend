import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route, Router } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { TweetsComponent } from './tweets/tweets.component';
import { LikesComponent } from './likes/likes.component';
import { RetweetsComponent } from './retweets/retweets.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';
import { SettingsComponent } from '../settings/settings.component';

const profileRoutes : Routes = [
    {
        path: 'profile',
        component: ProfileComponent,
        children: [
            { path: '', redirectTo: '/tweets', pathMatch: 'full' },
            { path : 'tweets' , component : TweetsComponent },
            { path : 'likes' , component : LikesComponent },
            { path : 'retweets' , component : RetweetsComponent },
            { path : 'followers' , component : FollowersComponent },
            { path : 'following' , component : FollowingComponent },
            { path : 'settings' , component : SettingsComponent }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(profileRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ProfileRoutingModule {}
