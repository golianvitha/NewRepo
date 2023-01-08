import { Component, inject, OnInit } from '@angular/core';

import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {

  constructor(
    private router:Router
    // private _bottomSheetRef: MatBottomSheetRef<ThanksComponent>
    ) { }

  ngOnInit(): void {
    console.log("In thanks");
    // this.router.navigate(['login'])
  }

}
