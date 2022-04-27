import { Asset } from "./asset";
import {Category} from "./category";
import {Tag} from "./tag";
export interface Artwork {
  id:number;
  title:string;
  description:string;
  creator:string;
  creationLocation:string;
  
  createdOn:Date,
  estimation:string,
  isRestricted:boolean,
  location:string;
  auctionList:string;
  category:Category;
  tags:Tag[];
  estimatedPrice:string;
  photos:Asset[];

  kudos:number[];
  reports:number[];
  auction:number;
  owner:number;
}
