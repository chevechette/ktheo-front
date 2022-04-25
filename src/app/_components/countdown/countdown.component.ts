import {Component, OnInit, ViewChild} from '@angular/core';
import {MatRipple} from "@angular/material/core";

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  @ViewChild(MatRipple) ripple!: MatRipple;

  constructor() { }

  centered = false;
  disabled = false;
  unbounded = false;
  radius !: number;
  color !: string;
  ngOnInit(): void {
  }

  launchRipple() {
    const rippleRef = this.ripple.launch({
      persistent: true,
      centered: true
    });

    // Fade out the ripple later.
    rippleRef.fadeOut();
  }



}
