import {UserData} from "./user-data";
import {Profile} from "./profile";
import {Role} from "./role";
import {Address} from "./address";


export interface User {
  id?:number,
  mail:string,
  username:string,
  password:string,
  verified:boolean,
  roleList:Role[]
  profile:Profile,
  userData:UserData,
  address:Address;
}
