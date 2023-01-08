import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { teamcore, teamScore } from '../teamscore';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-srinidhi',
  templateUrl: './srinidhi.component.html',
  styleUrls: ['./srinidhi.component.css']
})
export class SrinidhiComponent implements OnInit {

  datas=[
    {
      name:"HUL",
      cost:"111.65",
      up:"9.81% up"
    },
    {
      name:"DABUR",
      cost:"5410.10",
      up:"9.16% up"
    },
    {
      name:"TCS",
      cost:"3100",
      up:"9.15% up"
    },
    {
      name:"INFOSYS",
      cost:"1538",
      up:"8.99% up"
    },
    
    
  ]
  dataas:any;
  yes:boolean=false;
  constructor(public dialogRef: MatDialogRef<SrinidhiComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {name:string},
    private service: UserDetailsService) { }

  ngOnInit(): void {
    console.log(this.data)
    if(this.data.name=='My Score'){
      this.yes=true;
      this.getTeamScore();
    }
    this.data.name=this.data.name.toUpperCase();
  }

  getTeamScore(){
    this.service.teamscore().subscribe((resp:teamcore)=>{
      console.log(resp.teamscore.stockinfo);
      this.dataas=resp.teamscore.stockinfo;
    })
  }

}
