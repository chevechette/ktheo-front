import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Auction} from "../../_interfaces/auction";
import {MatRipple} from "@angular/material/core";
import {AuctionService} from "../../_services/auction/auction.service";
import {ActivatedRoute, ParamMap, Route} from "@angular/router";
import {interval, Observable, of, timer} from "rxjs";
import {BidService} from "../../_services/bid/bid.service";
import {TokenStorageService} from "../../_services/token-storage/token-storage.service";
import {UserService} from "../../_services/user/user.service";
import {Biding} from "../../_interfaces/biding";
import {User} from "../../_interfaces/user";
import {CreateBid} from "../../_interfaces/dto/create-bid";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {
   auctionsArtworks!:string[];

  constructor(private auctionService : AuctionService,private userService:UserService,private tokenService: TokenStorageService,private route:ActivatedRoute,private bidService:BidService,private _liveAnnouncer: LiveAnnouncer) {
  }
  num1!:number;
  max:number=30000;
  min:number=0;
  auctionEnd:number=0;
  currentUser!:User;

  isBiddable():boolean{
    let end = new Date(this.auction.endsOn).getTime()
    let now = new Date().getTime()
    return now - end <= 0;
  }

  private assignAuction(id:number){

    this.auctionService.getAuction(id).subscribe(
      {
        next:next=> {
          console.log(next)
          this.auction=next;
        },complete: ()=> {
          this.auctionEnd = new Date(this.auction.endsOn).getTime()
          timer(this.auction.endsOn)
          {
            this.auctionService.getAuctionsBid(id).subscribe({
              next: next => this.dataSource = new MatTableDataSource(next),
              complete: () => {
                console.log(this.dataSource)
                this.dataSource.sort = this.sort;
              }
            });
          }
        }
      }
    )


  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id =Number (params.get('id'))
      this.assignAuction(id)
      this.num1 = this.min
      //timer

    });
  }




  @Input()
  auction !: Auction;

  @ViewChild(MatSort) sort!: MatSort;



  bid(){
    let bid:CreateBid ={
      bidder:this.tokenService.getUser().userId,
      bidAmount:this.num1,
      currency:"€",
      datetime:new Date(),
      auction:this.auction.id
    }
    this.userService.getUser()
    if (this.isBiddable())
    this.bidService.sendBid(bid).subscribe({
      error:err=>console.error(err),
      complete:()=>console.log("done")
    })
  }

  displayedColumns: string[] = ['id','bidder','datetime', 'bidAmount','buy'];
  dataSource!:MatTableDataSource<Biding>;




  plus() {
    if (this.num1 >= this.max) {
      console.log("disable");
    } else {
      this.num1 += 1000;
      console.log("Value of num1 after increment ", this.num1);
    }
  }



  minus() {
    if (this.num1 <= this.min) {
      console.log("disable");
    } else {
      this.num1-=1000;
      console.log("Value of num1 after decr ", this.num1);
    }
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  IsMaxBid(value:number,id:number):boolean{
    console.log(id+"/"+this.tokenService.getUser().userId)
    let number = Math.max.apply(Math,this.dataSource.data.map(o=> o.bidAmount))
    sessionStorage.setItem("price",number.toString())
    return this.tokenService.getUser().userId == id && value ===Math.max.apply(Math,this.dataSource.data.map(o=> o.bidAmount))
  }

}
