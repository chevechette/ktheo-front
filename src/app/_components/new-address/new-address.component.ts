import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AddressService} from "../../_services/address.service";
import {Address} from "../../_interfaces/address";

@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.component.html',
  styleUrls: ['./new-address.component.css']
})
export class NewAddressComponent implements OnInit {

  newUserAddressForm : FormGroup = this.fb.group({});
  newUserAddressSubmited: boolean=false;

  @Output("newAddress")
  newAddressEvent:EventEmitter<Address> = new EventEmitter<Address>();

  constructor(private fb: FormBuilder,
              private addressService:AddressService,) { }

  ngOnInit(): void {
    this.newUserAddressForm = this.fb.group({
      postalCode:['',[Validators.required]],
      streetName:['',[Validators.required]],
      streetNumber:['',[Validators.required]],
      streetNumberComplement:[''],
      town:['',[Validators.required]]
    })

  }

  getErrorMessage() {
    return "Champ invalide";
  }


  onSubmitNewAddress() {
    this.newUserAddressSubmited=true;
    if(this.newUserAddressForm.invalid){
      return;
    }

    let address:Address ={
      town:this.newUserAddressForm.value.town,
      streetNumber:this.newUserAddressForm.value.streetNumber,
      streetNumberComplement:this.newUserAddressForm.value.streetNumberComplement,
      streetName:this.newUserAddressForm.value.streetName,
      postalCode:this.newUserAddressForm.value.postalCode,
    }

    this.addressService.addAddress(address).subscribe({next:ok=>{}});

    this.newAddressEvent.emit();



  }
}
