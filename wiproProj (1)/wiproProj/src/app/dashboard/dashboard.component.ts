import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';
import { InfluencersComponent } from '../influencers/influencers.component';
import { ThanksComponent } from '../thanks/thanks.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  active:any;
  isSelected: boolean=true;
  isNotSelected: boolean=false;
  Names:string[]=["NIFTY 50","NIFTY BANK","NIFTY AUTO","NIFTY OILS"]
  constructor( private dialog:MatDialog,private router:Router,private _bottomSheet: MatBottomSheet,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  add(){
    this.isSelected= this.isSelected?false:true;
    this.isNotSelected =this.isNotSelected? false:true;
  }
  leaderboard(){
    this.router.navigate(['leaderboard']);
  }

  openBottomSheet(){
    const dialogRef = this.dialog.open(InfluencersComponent,{
      height:"80%",
      width: '85%',
      panelClass: 'new-class',
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.router.navigate(['dashboard']);
    });
  }
  openSnackBar(){
    this._snackBar.openFromComponent(ThanksComponent, {
      duration: 5000,
    });
  }
  gotoGames(){
    this.router.navigate(['games']);
  }
  openDialog(){
    this.dialog.open(InfluencersComponent,{
      height:'50%',
      width:'85%',

    })
  }
}

