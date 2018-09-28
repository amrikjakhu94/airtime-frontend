import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HeaderComponent } from './shared/header/header.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { NewsfeedComponent } from './indexpage/newsfeed/newsfeed.component';
import { SharedModule } from './shared/shared.module';
import { ProfileModule } from './profile/profile.module';
import { SignupComponent } from './signup/signup.component';
import { ConfigService } from './welcomepage/config.service';
import { SettingsComponent } from './settings/settings.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { MessagesComponent } from './indexpage/messages/messages.component';
import { NotificationsComponent } from './indexpage/notifications/notifications.component';
import { ApiService } from './core/services/api.service';
import { AuthGuard } from './core/services/auth-guard.service';
import { JwtService } from './core/services/jwt.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    IndexpageComponent,
    NewsfeedComponent,
    SignupComponent,
    SettingsComponent,
    ChangepasswordComponent,
    NotificationsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProfileModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule,
    Ng4LoadingSpinnerModule.forRoot(),
    DialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [
    ConfigService,
    ApiService,
    AuthGuard,
    JwtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
