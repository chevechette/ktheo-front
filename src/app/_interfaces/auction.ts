import {Biding} from "./biding";
import {Artwork} from "./artwork";
import {User} from "./user";

export interface Auction {
  id:number,
  startsOn: Date,
  endsOn: Date,
  status:string,
  bids:Biding[],
  artwork:number,
  seller:number;

}