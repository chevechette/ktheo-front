import {UserDetails} from "./user-details";


export interface User {
  id:number,
  email:string,
  username:string,
  password:string,
  isVerified:boolean;
  profile:Profile;
  userDetails:UserDetails;
}
