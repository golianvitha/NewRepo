import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { ThanksComponent } from '../thanks/thanks.component';

@Component({
  selector: 'app-stocks-select',
  templateUrl: './stocks-select.component.html',
  styleUrls: ['./stocks-select.component.css']
})
export class StocksSelectComponent implements OnInit {
  budgetLeft:number=10000;
  picks:number=5;
  data1=[
    {

    }
  ]
  data:any=[
      {name:"NIFTY 50",
      value: 18414.9 },
      {name:"BRITANNIA",
      value: 4460 },
      {name:"HEROMOTOCO",
      value: 2769},
      {name:"NTPC",
      value: 172.3},
      {name:"SBILIFE",
      value: 1274},
      {name:"SUNPHARMA",
      value: 1001},
      {name:"M&M",
      value: 1286}
  ]
  constructor(public dialog: MatDialog,private _snackBar: MatSnackBar,private _bottomSheet: MatBottomSheet,private router: Router) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent,{
      height:"40%",
      width: '85%',
      panelClass: 'new-class',
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  Submit(){
      this._snackBar.openFromComponent(ThanksComponent, {
        duration: 5000,
      });
    const dialogRef = this.dialog.open(ThanksComponent,{
      height:"40%",
      width: '85%',
      panelClass: 'new-class',
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.router.navigate(['dashboard']);
    });
  }

  openBottomSheet(){
    this._bottomSheet.open(ThanksComponent,{
        panelClass: 'my-component-bottom-sheet'
    });
  }

}
