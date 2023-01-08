import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  goBack(){
	this.router.navigate(['/dashboard'])
  }

  displayedColumns: string[] = ['rank', 'member', 'score'];
  dataSource = ELEMENT_DATA;

 
  dataSourceu = ELEMENT_DATA2;


}
