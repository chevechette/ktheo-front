import {Biding} from "./biding";
import {Artwork} from "./artwork";

export interface Auction {
  id:number,
  auctionStartingTime: Date,
  auctionStopingTime: Date,
  status:string,
  bids:Biding[],
  artwork:Artwork;
}