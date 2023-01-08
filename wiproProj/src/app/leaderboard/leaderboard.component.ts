import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { leader } from '../leader';
import { SrinidhiComponent } from '../srinidhi/srinidhi.component';
import { UserDetailsService } from '../user-details.service';
export interface LeaderBoard {
  member: string;
  rank: number;
  score: number;
}
export interface User {
	member: string;
	rank: number;
	score: number;
  }
const ELEMENT_DATA: LeaderBoard[] = [
        		{"member": "stockpicker2", "rank": 1,"score": 111610.0},
				{"member": "stockpicker5", "rank": 2, "score": 7770.0}, 
				{"member": "stockpicker8", "rank": 3, "score": 3960.0}, 
				{"member": "stockpicker4", "rank": 4, "score": -4360.0}, 
				{"member": "stockpicker9", "rank": 5, "score": -5900.0},
				{"member": "stockpicker3", "rank": 6, "score": -9874.0},
				{"member": "stockpicker10", "rank": 7, "score": -11079.0}, 
				{"member": "stockpicker7", "rank": 8, "score": -17470.0},
				{"member": "stockpicker6", "rank": 9, "score": -18000.0}, 
				{"member": "stockpicker11", "rank": 10, "score": -25740.0}, 
				{"member": "stockpicker1", "rank": 11, "score": -25740.0}, 
				{"member": "sfluser2", "rank": 12, "score": -25740.0}, 
				{"member": "sfluser10", "rank": 13, "score": -25740.0},
				{"member": "sfluser1", "rank": 14, "score": -25740.0}
];
const ELEMENT_DATA2: User[] = [
	{"member": "my score", "rank": 18,"score": -111610.0}]



@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

	isSelected:boolean=true;
	something:LeaderboardComponent[];
  constructor(private router:Router,private dialog: MatDialog,private service: UserDetailsService) { }

  ngOnInit(): void {
	this.getLeader();
  }
  getLeader(){
	this.service.leaderboard().subscribe((resp:leader)=>{
		console.log(resp);
		let show=resp;
		console.log(show);
		this.something=resp.leaderboard;
		console.log(this.something);
		this.dataSource=resp.leaderboard;
		
	});
  }
  goBack(){
	this.router.navigate(['/dashboard'])
  }

  displayedColumns: string[] = ['rank', 'member', 'score'];
  dataSource : any;
 
  dataSourceu = ELEMENT_DATA2;

  add(){
	this.isSelected=this.isSelected?false:true;
	this.router.navigate(['stats'])
  }

  hii(i){
	console.log(i)
	this.dialog.open(SrinidhiComponent,{
		height:'50%',
		width:'85%',
		data:{name:i.member}

	})
  }

  open(names){
	this.dialog.open(SrinidhiComponent,{
		height:'50%',
		width:'85%',
		data:{name:names}

	})

  }
  
}
