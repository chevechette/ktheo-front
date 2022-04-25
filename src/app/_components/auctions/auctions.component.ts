import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Auction} from "../../_interfaces/auction";
import {AuctionService} from "../../_services/auction/auction.service";

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {

  constructor(private auctionService: AuctionService) { }

  ngOnInit(): void {
    this.auctionService.getAuctions().subscribe({
      next: value => this.auctions = value
    });
  }
  auctions!: Auction[]
  panelOpenState = false;

}
