import {Category} from "./category";

export interface Artwork {
  id:number,
  name:string,
  description:string;
  owner:number,
  createdOn:Date,
  estimation:string,
  restricted:boolean,
  location:string;
  auctionList:string;
  category:Category

}
