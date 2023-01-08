import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ThanksComponent } from '../thanks/thanks.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  cost:any=0;
  quantity:number;
  value:number=0;
  disabled:boolean=true;
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {name:string,cost:number}) { }

  ngOnInit(): void {
  }
  add(){
    this.value=this.value+1;
    this.budgetPercentage();
    this.disabled=false;
  }
  subtract(){
    if(this.value!=0){
      this.value=this.value-1;
      this.budgetPercentage();
    }
    else{
      this.disabled=false;
    }
  }
  budgetPercentage(){
    this.cost=(this.value*this.data.cost).toFixed(3);
  }

  ok(){
    this.dialogRef.close({cost:this.cost})
  }

}

