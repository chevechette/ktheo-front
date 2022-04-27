import {User} from "./user";
import {Auction} from "./auction";

export interface Biding {
  id:number,
  bidder:User,
  bidAmount:number,
  currency:string;
  datetime:Date,
  auction:Auction
}
