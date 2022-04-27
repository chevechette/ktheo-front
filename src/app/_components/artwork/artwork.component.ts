import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ArtworkService} from "../../_services/artwork/artwork.service";
import {Artwork} from "../../_interfaces/artwork";
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER, I, T} from "@angular/cdk/keycodes";
import {Observable, of} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {FormControl} from "@angular/forms";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import { Router } from '@angular/router';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  background: string;
  isShown:boolean;
}
export interface Fruit {
  name: string;
}
@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.css']
})

export class ArtworkComponent implements OnInit {
  
  // Graphics
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue', isShown: false, background: 'https://i.pinimg.com/originals/d8/d6/f9/d8d6f94e47c589ba87892cfca4ee6484.png'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen', isShown: false, background: 'https://imgs.search.brave.com/uGmd7dDX0Qhyrxi_BdAPdi_KvcOWSa1bjw9Gy3g_ov4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9hcnRz/dmlld2VyLmNvbS9p/bWFnZXMvRy92YW5n/b2doLzE4ODctOTUu/anBn'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink', isShown: false, background: 'https://imgs.search.brave.com/Z2dyn9bxnqmsBjdVTjKr-_t7rRS4t6OFG5098bFUdnk/rs:fit:602:883:1/g:ce/aHR0cHM6Ly9xcGgu/ZnMucXVvcmFjZG4u/bmV0L21haW4tcWlt/Zy1jZjU4MGQ3NWQz/NDZjNDA1Y2JjZDYw/YzA4MWJmNTYyZA'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1', isShown: false, background: 'https://imgs.search.brave.com/QOlI3nQib6uM3SX6CprXplU3YY4xKpXA5Q5vyOvK7m0/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5w/aXhlbHN0YWxrLm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8xMC9JbWFnZS1v/Zi1CaW5hcnktQ29k/ZS5qcGc'},
    {text: 'One', cols: 3, rows: 1, color: 'lightblue', isShown: false, background: 'https://i.pinimg.com/originals/d8/d6/f9/d8d6f94e47c589ba87892cfca4ee6484.png'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen', isShown: false, background: 'https://imgs.search.brave.com/uGmd7dDX0Qhyrxi_BdAPdi_KvcOWSa1bjw9Gy3g_ov4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9hcnRz/dmlld2VyLmNvbS9p/bWFnZXMvRy92YW5n/b2doLzE4ODctOTUu/anBn'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink', isShown: false, background: 'https://imgs.search.brave.com/Z2dyn9bxnqmsBjdVTjKr-_t7rRS4t6OFG5098bFUdnk/rs:fit:602:883:1/g:ce/aHR0cHM6Ly9xcGgu/ZnMucXVvcmFjZG4u/bmV0L21haW4tcWlt/Zy1jZjU4MGQ3NWQz/NDZjNDA1Y2JjZDYw/YzA4MWJmNTYyZA'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1', isShown: false, background: 'https://imgs.search.brave.com/QOlI3nQib6uM3SX6CprXplU3YY4xKpXA5Q5vyOvK7m0/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5w/aXhlbHN0YWxrLm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8xMC9JbWFnZS1v/Zi1CaW5hcnktQ29k/ZS5qcGc'},
    {text: 'One', cols: 3, rows: 1, color: 'lightblue', isShown: false, background: 'https://i.pinimg.com/originals/d8/d6/f9/d8d6f94e47c589ba87892cfca4ee6484.png'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen', isShown: false, background: 'https://imgs.search.brave.com/uGmd7dDX0Qhyrxi_BdAPdi_KvcOWSa1bjw9Gy3g_ov4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9hcnRz/dmlld2VyLmNvbS9p/bWFnZXMvRy92YW5n/b2doLzE4ODctOTUu/anBn'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink', isShown: false, background: 'https://imgs.search.brave.com/Z2dyn9bxnqmsBjdVTjKr-_t7rRS4t6OFG5098bFUdnk/rs:fit:602:883:1/g:ce/aHR0cHM6Ly9xcGgu/ZnMucXVvcmFjZG4u/bmV0L21haW4tcWlt/Zy1jZjU4MGQ3NWQz/NDZjNDA1Y2JjZDYw/YzA4MWJmNTYyZA'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1', isShown: false, background: 'https://imgs.search.brave.com/QOlI3nQib6uM3SX6CprXplU3YY4xKpXA5Q5vyOvK7m0/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5w/aXhlbHN0YWxrLm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8xMC9JbWFnZS1v/Zi1CaW5hcnktQ29k/ZS5qcGc'},
    {text: 'One', cols: 3, rows: 1, color: 'lightblue', isShown: false, background: 'https://i.pinimg.com/originals/d8/d6/f9/d8d6f94e47c589ba87892cfca4ee6484.png'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen', isShown: false, background: 'https://imgs.search.brave.com/uGmd7dDX0Qhyrxi_BdAPdi_KvcOWSa1bjw9Gy3g_ov4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9hcnRz/dmlld2VyLmNvbS9p/bWFnZXMvRy92YW5n/b2doLzE4ODctOTUu/anBn'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink', isShown: false, background: 'https://imgs.search.brave.com/Z2dyn9bxnqmsBjdVTjKr-_t7rRS4t6OFG5098bFUdnk/rs:fit:602:883:1/g:ce/aHR0cHM6Ly9xcGgu/ZnMucXVvcmFjZG4u/bmV0L21haW4tcWlt/Zy1jZjU4MGQ3NWQz/NDZjNDA1Y2JjZDYw/YzA4MWJmNTYyZA'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1', isShown: false, background: 'https://imgs.search.brave.com/QOlI3nQib6uM3SX6CprXplU3YY4xKpXA5Q5vyOvK7m0/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5w/aXhlbHN0YWxrLm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8xMC9JbWFnZS1v/Zi1CaW5hcnktQ29k/ZS5qcGc'},
    {text: 'One', cols: 3, rows: 1, color: 'lightblue', isShown: false, background: 'https://i.pinimg.com/originals/d8/d6/f9/d8d6f94e47c589ba87892cfca4ee6484.png'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen', isShown: false, background: 'https://imgs.search.brave.com/uGmd7dDX0Qhyrxi_BdAPdi_KvcOWSa1bjw9Gy3g_ov4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9hcnRz/dmlld2VyLmNvbS9p/bWFnZXMvRy92YW5n/b2doLzE4ODctOTUu/anBn'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink', isShown: false, background: 'https://imgs.search.brave.com/Z2dyn9bxnqmsBjdVTjKr-_t7rRS4t6OFG5098bFUdnk/rs:fit:602:883:1/g:ce/aHR0cHM6Ly9xcGgu/ZnMucXVvcmFjZG4u/bmV0L21haW4tcWlt/Zy1jZjU4MGQ3NWQz/NDZjNDA1Y2JjZDYw/YzA4MWJmNTYyZA'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1', isShown: false, background: 'https://imgs.search.brave.com/QOlI3nQib6uM3SX6CprXplU3YY4xKpXA5Q5vyOvK7m0/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5w/aXhlbHN0YWxrLm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8xMC9JbWFnZS1v/Zi1CaW5hcnktQ29k/ZS5qcGc'},
    {text: 'One', cols: 3, rows: 1, color: 'lightblue', isShown: false, background: 'https://i.pinimg.com/originals/d8/d6/f9/d8d6f94e47c589ba87892cfca4ee6484.png'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen', isShown: false, background: 'https://imgs.search.brave.com/uGmd7dDX0Qhyrxi_BdAPdi_KvcOWSa1bjw9Gy3g_ov4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9hcnRz/dmlld2VyLmNvbS9p/bWFnZXMvRy92YW5n/b2doLzE4ODctOTUu/anBn'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink', isShown: false, background: 'https://imgs.search.brave.com/Z2dyn9bxnqmsBjdVTjKr-_t7rRS4t6OFG5098bFUdnk/rs:fit:602:883:1/g:ce/aHR0cHM6Ly9xcGgu/ZnMucXVvcmFjZG4u/bmV0L21haW4tcWlt/Zy1jZjU4MGQ3NWQz/NDZjNDA1Y2JjZDYw/YzA4MWJmNTYyZA'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1', isShown: false, background: 'https://imgs.search.brave.com/QOlI3nQib6uM3SX6CprXplU3YY4xKpXA5Q5vyOvK7m0/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5w/aXhlbHN0YWxrLm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8xMC9JbWFnZS1v/Zi1CaW5hcnktQ29k/ZS5qcGc'},
    {text: 'One', cols: 3, rows: 1, color: 'lightblue', isShown: false, background: 'https://i.pinimg.com/originals/d8/d6/f9/d8d6f94e47c589ba87892cfca4ee6484.png'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen', isShown: false, background: 'https://imgs.search.brave.com/uGmd7dDX0Qhyrxi_BdAPdi_KvcOWSa1bjw9Gy3g_ov4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9hcnRz/dmlld2VyLmNvbS9p/bWFnZXMvRy92YW5n/b2doLzE4ODctOTUu/anBn'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink', isShown: false, background: 'https://imgs.search.brave.com/Z2dyn9bxnqmsBjdVTjKr-_t7rRS4t6OFG5098bFUdnk/rs:fit:602:883:1/g:ce/aHR0cHM6Ly9xcGgu/ZnMucXVvcmFjZG4u/bmV0L21haW4tcWlt/Zy1jZjU4MGQ3NWQz/NDZjNDA1Y2JjZDYw/YzA4MWJmNTYyZA'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1', isShown: false, background: 'https://imgs.search.brave.com/QOlI3nQib6uM3SX6CprXplU3YY4xKpXA5Q5vyOvK7m0/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5w/aXhlbHN0YWxrLm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8xMC9JbWFnZS1v/Zi1CaW5hcnktQ29k/ZS5qcGc'},
    {text: 'One', cols: 3, rows: 1, color: 'lightblue', isShown: false, background: 'https://i.pinimg.com/originals/d8/d6/f9/d8d6f94e47c589ba87892cfca4ee6484.png'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen', isShown: false, background: 'https://imgs.search.brave.com/uGmd7dDX0Qhyrxi_BdAPdi_KvcOWSa1bjw9Gy3g_ov4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9hcnRz/dmlld2VyLmNvbS9p/bWFnZXMvRy92YW5n/b2doLzE4ODctOTUu/anBn'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink', isShown: false, background: 'https://imgs.search.brave.com/Z2dyn9bxnqmsBjdVTjKr-_t7rRS4t6OFG5098bFUdnk/rs:fit:602:883:1/g:ce/aHR0cHM6Ly9xcGgu/ZnMucXVvcmFjZG4u/bmV0L21haW4tcWlt/Zy1jZjU4MGQ3NWQz/NDZjNDA1Y2JjZDYw/YzA4MWJmNTYyZA'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1', isShown: false, background: 'https://imgs.search.brave.com/QOlI3nQib6uM3SX6CprXplU3YY4xKpXA5Q5vyOvK7m0/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5w/aXhlbHN0YWxrLm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8xMC9JbWFnZS1v/Zi1CaW5hcnktQ29k/ZS5qcGc'},
    {text: 'One', cols: 3, rows: 1, color: 'lightblue', isShown: false, background: 'https://i.pinimg.com/originals/d8/d6/f9/d8d6f94e47c589ba87892cfca4ee6484.png'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen', isShown: false, background: 'https://imgs.search.brave.com/uGmd7dDX0Qhyrxi_BdAPdi_KvcOWSa1bjw9Gy3g_ov4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9hcnRz/dmlld2VyLmNvbS9p/bWFnZXMvRy92YW5n/b2doLzE4ODctOTUu/anBn'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink', isShown: false, background: 'https://imgs.search.brave.com/Z2dyn9bxnqmsBjdVTjKr-_t7rRS4t6OFG5098bFUdnk/rs:fit:602:883:1/g:ce/aHR0cHM6Ly9xcGgu/ZnMucXVvcmFjZG4u/bmV0L21haW4tcWlt/Zy1jZjU4MGQ3NWQz/NDZjNDA1Y2JjZDYw/YzA4MWJmNTYyZA'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1', isShown: false, background: 'https://imgs.search.brave.com/QOlI3nQib6uM3SX6CprXplU3YY4xKpXA5Q5vyOvK7m0/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5w/aXhlbHN0YWxrLm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8xMC9JbWFnZS1v/Zi1CaW5hcnktQ29k/ZS5qcGc'},
    {text: 'One', cols: 3, rows: 1, color: 'lightblue', isShown: false, background: 'https://i.pinimg.com/originals/d8/d6/f9/d8d6f94e47c589ba87892cfca4ee6484.png'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen', isShown: false, background: 'https://imgs.search.brave.com/uGmd7dDX0Qhyrxi_BdAPdi_KvcOWSa1bjw9Gy3g_ov4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9hcnRz/dmlld2VyLmNvbS9p/bWFnZXMvRy92YW5n/b2doLzE4ODctOTUu/anBn'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink', isShown: false, background: 'https://imgs.search.brave.com/Z2dyn9bxnqmsBjdVTjKr-_t7rRS4t6OFG5098bFUdnk/rs:fit:602:883:1/g:ce/aHR0cHM6Ly9xcGgu/ZnMucXVvcmFjZG4u/bmV0L21haW4tcWlt/Zy1jZjU4MGQ3NWQz/NDZjNDA1Y2JjZDYw/YzA4MWJmNTYyZA'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1', isShown: false, background: 'https://imgs.search.brave.com/QOlI3nQib6uM3SX6CprXplU3YY4xKpXA5Q5vyOvK7m0/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5w/aXhlbHN0YWxrLm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8xMC9JbWFnZS1v/Zi1CaW5hcnktQ29k/ZS5qcGc'},
  ];

  // Logical
  artworks!: Artwork[];
  categories!: string[];
  result!: Artwork[];
  
  // Graphics
  hoveredTile(hoverTile: Tile): void {
    hoverTile.isShown = !(hoverTile.isShown)
  }

  randImportance(): number {
    let dice = Math.random();
    if (dice < 0.1) {
      return 1
    } else if (dice > 0.9) {
      return 4
    } else if (dice >= 0.5) {
      return 3
    }
    return 2
  }

  intialiseTiles(): void {
    for (let cnt = 0; cnt < this.artworks.length; cnt++) {
      this.tiles[cnt].background = (this.artworks[cnt].photos.length > 0) ? this.artworks[cnt].photos[0].path : ''
      let dice = this.randImportance();
      this.tiles[cnt].cols = 1
      this.tiles[cnt].rows = 1
      switch (dice) {
        case 4:
          this.tiles[cnt].cols = 2
          this.tiles[cnt].rows = 2
          break;
        case 3:
          this.tiles[cnt].rows = 2
          break;
        case 2:
          this.tiles[cnt].cols = 2
          break;
      }

    }
  }
  
  // Logical
  getArtworks(){
    this.artService.getAll().subscribe({
      next: artwork => {
        this.artworks = artwork
      },
      error: err => console.log(err),
      complete: () => {
        this.result = this.artworks;
        console.log("Artwork retrieval - complete")
        console.log(this.artworks)
        this.intialiseTiles()
      }
    });
  }

  redirectToArtwork(artworkId:number) {
    this.router.navigate(['/artwork', artworkId]);
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

  ngOnInit(): void {
    this.getArtworks();
    this.result = this.artworks;
  }

  displayedColumns = ["title"];
}

