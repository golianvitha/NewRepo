import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { StocksSelectComponent } from './stocks-select/stocks-select.component';
import { GamesComponent } from './games/games.component';
import { StocksStatsComponent } from './stocks-stats/stocks-stats.component';

const routes: Routes = [
  {path:"head",component:HeaderComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"leaderboard",component:LeaderboardComponent},
  {path:"stocks",component:StocksSelectComponent},
  {path:"games",component:GamesComponent},
  {path:"stats",component:StocksStatsComponent},
  {path:"",redirectTo:'/dashboard',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            MatDialogModule
          ],
  exports: [RouterModule,
            MatDialogModule]
})
export class AppRoutingModule { }
