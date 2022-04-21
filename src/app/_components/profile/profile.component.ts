import { Component, OnInit } from '@angular/core';
import {UserService} from "../../_services/user/user.service";
import {Observable} from "rxjs";
import {DataSource} from "@angular/cdk/collections";
import {User} from "../../_interfaces/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private dataService: UserService) {
  }

  displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  dataSource = new PostDataSource(this.dataService);

  ngOnInit(): void {
  }

}
export class PostDataSource extends DataSource<any> {
  constructor(private dataService: UserService) {
    super();
  }

  connect(): Observable<User[]> {
    return this.dataService.getData();
  }

  disconnect() {
  }
}

