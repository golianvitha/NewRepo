import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import {MatTableModule} from '@angular/material/table';
import { StocksStatsComponent } from './stocks-stats/stocks-stats.component';
import { MatChip, MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { InfluencersComponent } from './influencers/influencers.component';
import { ThanksComponent } from './thanks/thanks.component'
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { StocksSelectComponent } from './stocks-select/stocks-select.component';
import { MatProgressBar, MatProgressBarModule } from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import { DialogComponent } from './dialog/dialog.component';
import { GamesComponent } from './games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LeaderboardComponent,
    StocksStatsComponent,
    InfluencersComponent,
    ThanksComponent,
    StocksSelectComponent,
    DialogComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
    MatChipsModule,
    MatIconModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
