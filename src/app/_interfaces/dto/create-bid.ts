import {User} from "../user";
import {Auction} from "../auction";

export interface CreateBid {
  bidder:number,
  bidAmount:number,
  currency:string,
  datetime:Date,
  auction:number;

}
