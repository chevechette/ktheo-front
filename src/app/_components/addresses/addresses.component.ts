import {Component, Input, OnInit} from '@angular/core';
import {Address} from "../../_interfaces/address";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {

  userAdressModifFormGroup : FormGroup = this.fb.group({});

  @Input("address")
  address!:Address

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
