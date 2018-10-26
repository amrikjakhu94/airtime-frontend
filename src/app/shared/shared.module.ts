import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { TrendingComponent } from './trending/trending.component';
import { FollowSuggestionsComponent } from './follow-suggestions/follow-suggestions.component';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [
    HeaderComponent,
    FooterComponent,
    TrendingComponent,
    FollowSuggestionsComponent
    ],
    imports: [
      RouterModule,
      CommonModule,
      DialogModule,
      ButtonModule
    ],
    exports:[
        HeaderComponent,
        FooterComponent,
        TrendingComponent,
        FollowSuggestionsComponent
    ]
  })
  export class SharedModule { }
