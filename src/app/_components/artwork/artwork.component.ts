import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ArtworkService} from "../../_services/artwork/artwork.service";
import {Artwork} from "../../_interfaces/artwork";
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {Observable, of} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {FormControl} from "@angular/forms";
import {Category} from "../../_interfaces/category";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";



export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.css']
})
export class ArtworkComponent implements OnInit {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  filteredCategory : Observable<string[]>;
  fruitCtrl = new FormControl();

  constructor(private artService : ArtworkService) {
    this.filteredCategory = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((artwork: string | null) => (artwork ? this._filter(artwork) : this.categories.slice())),
    );
  }
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  fruits: string[] = ['Lemon'];
  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;
  ngOnInit(): void {
    this.getArtworks();
    this.result = this.artworks;
    this.getCategorieNames();
    console.log(this.artworks)
  }

  artFilter:string[] =[];
  artworks!: Artwork[];
  categories!: string[];
  result!: Artwork[];
  displayedColumns = ["title"];

  allCategories = of(this.categories);


  getArtworks(){
     this.artService.getArtworks().subscribe({
       next: artwork => {this.artworks = artwork
       console.log(artwork)},
       error: err => console.log(err),
       complete: () => console.log("complete")
     });
  }
  getCategorieNames(){
     this.artService.getCategoriesName().subscribe({
       next: artwork => this.categories = artwork,
       error: err => console.log(err),
       complete: () => console.log("complete")

     });
  }


  remove(art:string){

    this.artFilter = this.artFilter?.filter(artcat=> artcat!=art)
    this.engine()
    console.log(this.artworks)
  }

  filter(filter:string){
    this.result = this.artworks?.filter(art=> art.category?art.category.name===filter: false)
    console.log(this.artworks)
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.categories.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  engine(){
    console.log("ca passe");
    if (this.artFilter.length>0){
      this.artFilter.forEach(f=>this.filter(f))
    }
    else {
      this.result = this.artworks
    }
    console.log(this.result)
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our fruit
    if (value) {
      this.artFilter.push(value);
      this.engine()
    }
    // Clear the input value
    event.chipInput!.clear();
    console.log(this.artFilter)
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.categories.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }



}
