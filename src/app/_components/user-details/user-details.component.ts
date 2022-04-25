import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../_interfaces/user";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input("user")
  user !: User;




}
