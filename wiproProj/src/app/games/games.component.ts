import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InfluencersComponent } from '../influencers/influencers.component';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  data=[
    {
      name:"MEGA CONTEST",
      cost:"29Rs",
      win:"Win 1L",
      entries:"6100/10000"
    },
    {
      name:"PRO CONTEST",
      cost:"1000Rs",
      win:"Win 10k",
      entries:"10/25"
    },
    {
      name:"PRO CONTEST",
      cost:"10Rs",
      win:"Win 1k",
      entries:"110/500"
    },
  ]
  constructor(private router:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  goBack(){
    this.router.navigate(['dashboard']);
  }
  goToStocks(){
    this.router.navigate(['stocks'])
  }
  openBottomSheet(){
    const dialogRef = this.dialog.open(InfluencersComponent,{
      height:"55%",
      width: '85%',
      panelClass: 'new-class',
    });
  }
}
