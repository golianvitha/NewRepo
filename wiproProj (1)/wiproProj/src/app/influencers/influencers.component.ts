import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-influencers',
  templateUrl: './influencers.component.html',
  styleUrls: ['./influencers.component.css']
})
export class InfluencersComponent implements OnInit {
  data:any=[
    {
      name:"Mukesh Agarwal",
      image:'../../assets/images/mukesh.PNG',
      date:"Jan 06",
      stocks:["Asian Paints","Varun Beverages" ,"JWS Steel","Ultratech Cements","Axis Bank","Coal India","LIC"]
    },
    {
      name:"Srinivasan",
      image:'../../assets/images/srinivasan.PNG'
    },
    {
      name:"Nitin Duggal"
    },
    {
      name:"Kamlesh Jain",
      image:'../../assets/images/kamlesh.PNG'
    },
    {
      name:"Biplab Mukherjee"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
