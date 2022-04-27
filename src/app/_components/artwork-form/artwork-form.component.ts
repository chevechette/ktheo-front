import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { Category } from 'src/app/_interfaces/category';
import { CreateArtwork } from 'src/app/_interfaces/dto/create-artwork';
import { Tag } from 'src/app/_interfaces/tag';
import { ArtworkService } from 'src/app/_services/artwork/artwork.service';
import { CategoryService } from 'src/app/_services/category/category.service';
import { TagService } from 'src/app/_services/tag/tag.service';
import {COMMA, ENTER, I, T} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artwork-form',
  templateUrl: './artwork-form.component.html',
  styleUrls: ['./artwork-form.component.css']
})
export class ArtworkFormComponent implements OnInit {
  futureArtwork:CreateArtwork = {
    category : 1,
    creator : "",
    creationLocation : "",
    description : "",
    estimatedPrice : "",
    isRestricted : false,
    owner : 7, ////////////////////////////////////////////////////TODO
    title : "",
    tags : []
  };
  categories:Category[] = [];
  possibleTags:Tag[] = [];
  possibleOptions:string[] = [];
  filteredOptions: Observable<string[]>;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  currentTags:Set<string> = new Set();
  tagControl = new FormControl();

  constructor(
    private artworkService : ArtworkService,
    private categoryService : CategoryService,
    private tagService : TagService, private router: Router) {
      this.filteredOptions = this.tagControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value)),
      );
    }

  ngOnInit(): void {
    this.getPossibleCategory()
    this.getPossibleTag()
  }
  
  private _filter(value: string): string[] {
    if (value == null) {
      value = ""
    }
    const filterValue = value.toLowerCase();

    return this.possibleOptions.filter(option => option.toLowerCase().includes(filterValue));
  }
  
  selected(event: MatAutocompleteSelectedEvent): void {
    this.currentTags.add(event.option.viewValue);
    this.tagControl.setValue(null);
  }

  addTag(event: MatChipInputEvent) {
    if (event.value) {
      this.currentTags.add(event.value);
      event.chipInput!.clear();
    }
  }

  removeTag(keyword: string) {
    this.currentTags.delete(keyword);
  }

  getPossibleCategory(){
    this.categoryService.getAll().subscribe({
      next: cat => {
        this.categories = cat
      },
      error: err => console.log(err),
      complete: () => {
        console.log("Categories retrieval - complete")
        console.log(this.categories);
      }
    });
  }
  
  getPossibleTag(){
    this.tagService.getAll().subscribe({
      next: tag => {
        this.possibleTags = tag
      },
      error: err => console.log(err),
      complete: () => {
        console.log("Tag retrieval - complete")
        console.log(this.possibleTags.map(tag => tag.tag));
        this.possibleOptions = this.possibleTags.map(tag => tag.tag)
      }
    });
  }

  postArtwork(): void {
    this.futureArtwork.tags = Array.from(this.currentTags);
    const data = this.futureArtwork;
    console.log(data)
    this.artworkService.create(data)
      .subscribe({
        next : response => {
          console.log(response);
        },
        error: error => {
          console.log(error);
        },
        complete: () => {
          this.router.navigate(['/artworks'])
        }
      });
  }
}
