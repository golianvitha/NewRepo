import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  cost:any;
  quantity:number;
  constructor() { }

  ngOnInit(): void {
    this.cost=this.quantity*200;
  }


}
