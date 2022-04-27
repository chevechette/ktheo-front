export interface Comment {
  id:number;
  author:number;
  topic:number;
  content:string;
  postedOn:Date;
  username?:string;
}