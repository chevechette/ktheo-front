import {Component, Input, OnInit} from '@angular/core';
import {Address} from "../../_interfaces/address";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AddressService} from "../../_services/address.service";
import {TokenStorageService} from "../../_services/token-storage/token-storage.service";

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {

  userAdressModifFormGroup : FormGroup = this.fb.group({});
  userAddressSubmit: boolean=false;

  @Input("address")
  address!:Address

  constructor( private fb: FormBuilder,
               private addressService:AddressService,
               private tokenService:TokenStorageService) { }

  ngOnInit(): void {
    this.userAdressModifFormGroup = this.fb.group({
      postalCode:[this.address.postalCode],
      streetName:[this.address.streetName],
      streetNumber:[this.address.streetNumber],
      streetNumberComplement:[this.address.streetNumberComplement],
      town:[this.address.town]
    })
    console.log(this.tokenService.getUser().userId)
  }

  onSubmitAddressChange() {
    this.userAddressSubmit=true;
    if(this.userAdressModifFormGroup.invalid){
      return;
    }
    let address:Address ={
      id:this.address.id,
      town:this.userAdressModifFormGroup.value.town,
      streetNumber:this.userAdressModifFormGroup.value.streetNumber,
      streetNumberComplement:this.userAdressModifFormGroup.value.streetNumberComplement,
      streetName:this.userAdressModifFormGroup.value.streetName,
      postalCode:this.userAdressModifFormGroup.value.postalCode,
      userId:this.tokenService.getUser().userId
    }
    console.log(address)

    this.addressService.updateAddress(address).subscribe({next:ok=>{}});
  }

  getErrorMessage() {
    return "Champ invalide";
  }
}
