export interface CreateTransaction {
  owner:number,
  buyer:number,
  artwork:number,
  price:number;
  status:string,
  boughtOn:Date;
}
