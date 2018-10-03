import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { TrendingComponent } from './trending/trending.component';
import { FollowSuggestionsComponent } from './follow-suggestions/follow-suggestions.component';

@NgModule({
    declarations: [
    HeaderComponent,
    FooterComponent,
    TrendingComponent,
    FollowSuggestionsComponent
    ],
    imports: [
      [RouterModule]
    ],
    exports:[
        HeaderComponent,
        FooterComponent,
        TrendingComponent,
        FollowSuggestionsComponent
    ]
  })
  export class SharedModule { }
