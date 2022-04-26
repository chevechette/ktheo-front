import {Category} from "./category";
import {User} from "./user";
import {Auction} from "./auction";
import {Kudos} from "./kudos";
import {Tag} from "./tag";

export interface Artwork {
  id:number,
  title:string,
  description:string;
  owner:number,
  creationLocation:string,
  createdOn:Date,
  creator:string,
  estimatedPrice:string,
  restricted:boolean,
  location:string;
  auctionList:string;
  category:Category,
  auction:Auction,
  kudos:Kudos,
  tags:Tag[]

}
