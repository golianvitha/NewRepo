import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface stats {
  stock: string;
  price: number;
  score: number;
}

const ELEMENT_DATA: stats[] = [
  {"stock": "NIFTY 50", "price": 18042.95,"score": -2.1},
  {"stock": "TATA MOTORS", "price": 385, "score": -3.0}, 
  {"stock": "WIPRO", "price": 389, "score": 2.0}, 
  {"stock": "TECHM", "price": 1019, "score": -1.3}, 
  {"stock": "MARUTI", "price": 8419, "score": -0.5},
  {"stock": "DIVISLAB", "price": 3430, "score": -1.0},
  {"stock": "HDFCLIFE", "price": 597.9, "score": 1.3}, 
  {"stock": "TCS", "price": 3313, "score": 2.3},
  {"stock": "DRREDY", "price": 4241, "score": -1.5}, 
  {"stock": "ADANIENT", "price": 3822, "score": 2.5}, 
  {"stock": "UPL", "price": 715.1, "score": -0.75}, 
  {"stock": "SBILIFE", "price": 1260, "score": -1.75}, 
  {"stock": "BRITANNIA", "price": 4222.85, "score": 3.0},
  {"stock": "HCLTECH", "price": 1036.5, "score": -1.0}
];


@Component({
  selector: 'app-stocks-stats',
  templateUrl: './stocks-stats.component.html',
  styleUrls: ['./stocks-stats.component.css']
})
export class StocksStatsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  add(){
    this.router.navigate(['leaderboard']);
  }
  
  displayedColumns: string[] = [ 'stock','price', 'score'];
  
  dataSource = ELEMENT_DATA;
  goBack(){
    this.router.navigate(['dashboard']);
  }
}
