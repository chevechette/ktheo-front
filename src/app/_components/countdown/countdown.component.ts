import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatRipple} from "@angular/material/core";
import {Auction} from "../../_interfaces/auction";
import {interval, take, timer} from "rxjs";


@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  @ViewChild(MatRipple) ripple!: MatRipple;

  constructor() { }

  duration!:number
  remainingTime!:number;
  remainingTimeString!:string;
  centered = false;
  disabled = false;
  unbounded = false;
  radius !: number;
  color !: string;



  ngOnInit(): void {
    let now = new Date().getTime();
    console.log(now)
    this.computeRemainingTime()
    console.log(this.duration)
    interval(1).subscribe(n=> {
      if (this.duration - new Date().getTime() >= 0){
        this.remainingTime = this.duration -  new Date().getTime();
        this.remainingTimeToString(this.remainingTime)
        if(n%500===0) {
          this.launchRipple()
        }
      } else this.remainingTimeString = "Auction Finished"
    })
    console.log(this.remainingTimeString)
  }


  remainingTimeToString(millis : number){
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed()
    this.remainingTimeString = minutes + ":" + (parseInt(seconds)<10 ? '0' : '') + seconds;
  }



  launchRipple() {
    const rippleRef = this.ripple.launch({
      color:"rgba(255, 0, 0,0.4)",
      persistent: true,
      centered: true,
    });


    // Fade out the ripple later.
    rippleRef.fadeOut();
  }

  @Input("auction")
  auction !: Auction;

  computeRemainingTime(){
    //let auctionStart = this.auction.auctionStartingTime.getTime();
    let auctionEnd = new Date(this.auction.endsOn).getTime();

    let now = new Date().getTime();


    if (auctionEnd){
      this.duration = auctionEnd;
      console.log(this.duration)
    }

    // else remaingtime = this.auction.auctionStopingTime.getTime() - this.auction.auctionStartingTime.getTime()

  }





}
