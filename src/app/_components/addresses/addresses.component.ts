import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Address} from "../../_interfaces/address";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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

  @Output("addressRemoved")
  deleteAddressEvent:EventEmitter<number> = new EventEmitter<number>();

  constructor( private fb: FormBuilder,
               private addressService:AddressService,
               private tokenService:TokenStorageService) { }

  ngOnInit(): void {
    this.userAdressModifFormGroup = this.fb.group({
      postalCode:[this.address.postalCode,[Validators.required]],
      streetName:[this.address.streetName,[Validators.required]],
      streetNumber:[this.address.streetNumber,[Validators.required]],
      streetNumberComplement:[this.address.streetNumberComplement],
      town:[this.address.town,[Validators.required]]
    })
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

    this.addressService.updateAddress(address).subscribe({next:ok=>{}});
  }

  getErrorMessage() {
    return "Champ invalide";
  }

  onSubmitAddressDelete(id:number) {
    this.addressService.deleteOne(id).subscribe({next:ok=>{}});;
    this.deleteAddressEvent.emit(id);

  }
}
