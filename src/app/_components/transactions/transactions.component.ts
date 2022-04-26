import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TransactionService} from "../../_services/transaction/transaction.service";
import {CreateTransaction} from "../../_interfaces/dto/create-transaction";
import {AuctionService} from "../../_services/auction/auction.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Artwork} from "../../_interfaces/artwork";
import {authInterceptorProviders} from "../../_helpers/auth.interceptor";
import {TokenStorageService} from "../../_services/token-storage/token-storage.service";
import {Auction} from "../../_interfaces/auction";
import {ArtworkService} from "../../_services/artwork/artwork.service";



@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {


  auction!: Auction;
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder,private artworkService:ArtworkService,private router:Router,private route:ActivatedRoute,private transactionService:TransactionService,private auctionService:AuctionService,private tokenService:TokenStorageService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }


  send(){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id =Number (params.get('id'))
      let artworkT:number;
      let priceT:number;
      let ownerT:number;
      let prices:number[];
      let auction = this.auctionService.getAuction(id);
      auction.subscribe({
        next:next=>{
          console.log(next)
          this.auction = next
          ownerT = next.seller
          artworkT  = next.artwork
          let artwork !:Artwork;
          this.artworkService.getArtwork(next.artwork).subscribe({
            next:next=> {
              artwork = next
            }
          })
        }, complete:()=>{
          let price = String(sessionStorage.getItem("price"))
          let transaction:CreateTransaction={
            artwork: artworkT ,
            boughtOn: new Date(),
            buyer: this.tokenService.getUser().userId,
            owner: ownerT,
            price: parseInt((price)),
            status: "TRANSACTION_PENDING"
          }
          console.log(transaction)
          this.transactionService.registerTransaction(transaction).subscribe({
            error:err=>console.log(err)
          })
        }
      })


    });

  }
}
