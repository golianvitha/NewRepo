import { core } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { ThanksComponent } from '../thanks/thanks.component';
import { UserDetailsService } from '../user-details.service';

export interface Stocks{
  name:string;
  cost:number

}
@Component({
  selector: 'app-stocks-select',
  templateUrl: './stocks-select.component.html',
  styleUrls: ['./stocks-select.component.css']
})
export class StocksSelectComponent implements OnInit {
  [x: string]: any;
  budgetLeft:number=10000;
  picks:number=5;
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

  
  some:any;
  x:number;
  gettingData:Stocks[]=[];
  stock:Stocks={
    name: '',
    cost: 0
  };
  constructor(public dialog: MatDialog,private service:UserDetailsService,
    private _snackBar: MatSnackBar,private _bottomSheet: MatBottomSheet,private router: Router) { }

  ngOnInit(): void {
    this.preContestFeed();
  }
  preContestFeed(){
    this.service.preContestFeed().subscribe(resp=>{
      console.log(resp);
      this.some=resp;
      console.log(this.some.contestfeed.data);
      // for(let i=0;i<this.some.contestfeed.data.length;i++){
      //   for (let key in this.some.contestfeed.data[i]) {
      //     this.newStocks.push( {name: key, cost: this.some.contestfeed.data[i][key]} );
      //   }
      // };
      // for(var val of this.some.contestfeed.data){
      //   console.log(val);
      // })
      

      // this.data=
    });
  }
  goBack(){
    this.router.navigate(['games'])
  }
  openDialog(i) {
    const dialogRef = this.dialog.open(DialogComponent,{
      height:"40%",
      width: '85%',
      panelClass: 'new-class',
      data: {name:i.name,cost:i.value}
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(result.cost);
      let some=result.cost
      this.stock.cost=some;
      this.stock.name=i.name;
      console.log(this.stock);
      this.gotoPush(this.stock);
      console.log(`Dialog result:`, this.gettingData);
    });
  }

  gotoPush(stock){
    this.gettingData.splice(this.gettingData.length,stock)
    // this.gettingData[this.gettingData.length]=stock;
    console.log("gett",this.gettingData);
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
