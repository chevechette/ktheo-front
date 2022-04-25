import {UserDetails} from "./user-details";
import {Profile} from "./profile";
import {Role} from "./role";
import {Address} from "./address";


export interface User {
  id:number,
  mail:string,
  username:string,
  password:string,
  verified:boolean,
  roleList:Role[]
  profile:Profile,
  userDetails:UserDetails,
  address:Address;
}
