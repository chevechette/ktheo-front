import { Component, OnInit } from '@angular/core';
import {Auction} from "../../_interfaces/auction";

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  auction !: Auction;

  constructor() { }

  getAuctionMin(){
    return this.auction.bids.sort((a, b) => a.bidAmount-b.bidAmount)
  }

  ngOnInit(): void {
  }

}
