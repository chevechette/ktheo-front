import { Component, OnInit } from '@angular/core';

import { Comment } from "src/app/_interfaces/comment";
import { CommentService } from "src/app/_services/comment/comment.service";
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ArtworkService } from 'src/app/_services/artwork/artwork.service';
import { Artwork } from 'src/app/_interfaces/artwork';
import { TagService } from 'src/app/_services/tag/tag.service';
import { Tag } from 'src/app/_interfaces/tag';

@Component({
  selector: 'app-artwork-details',
  templateUrl: './artwork-details.component.html',
  styleUrls: ['./artwork-details.component.css']
})
export class ArtworkDetailsComponent implements OnInit {
  // Test and Debug
  images : string[] = [];
  userAvatar:string = 'https://www.matejovsky-povleceni.cz/images/products/base/prostirani-mucha-zverokruh-lngm.jpg';

  // Final
  routeSub: Subscription;
  artworkId:number = 0;
  comments:Comment[] = [];
  tags:Tag[] = [];
  commentContentForm:string;
  artwork?:Artwork;
  
  focusPointer = 0;
  focusImage:string = '';

  constructor(private commentService : CommentService,
    private artworkService : ArtworkService,
    private tagService : TagService,
    private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe(params => {
      this.artworkId = parseInt(params['id'])
      this.getLocalComments()
      this.getArtworkDetails();
      this.getLocalTags();
    });
    this.commentContentForm = "";
    // Test
    this.focusImage = this.images[this.focusPointer]
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe()
  }

  focusImageNext(step:number) : void {
    this.focusPointer += step + this.images.length;
    this.focusPointer %= this.images.length;
    this.focusImage = this.images[this.focusPointer]
  }

  getArtworkDetails() {
    this.artworkService.getById(this.artworkId).subscribe({
      next: artwork => {
        this.artwork = artwork
        this.images = Array.from(artwork.photos, photo => photo.path)
      },
      error: err => console.log(err),
      complete: () => {
        console.log("Artwork retrieval - complete")
        console.log(this.artwork);
      }
    });
  }
  
  getLocalComments(){
    this.commentService.getAllByArtwork(this.artworkId).subscribe({
      next: comment => {
        this.comments = comment
      },
      error: err => console.log(err),
      complete: () => {
        console.log("Comment retrieval - complete")
        console.log(this.comments);
      }
    });
  }
  
  getLocalTags(){
    this.tagService.getAllByArtwork(this.artworkId).subscribe({
      next: tag => {
        this.tags = tag
      },
      error: err => console.log(err),
      complete: () => {
        console.log("Tag retrieval - complete")
        console.log(this.tags);
      }
    });
  }

  postComment(): void {
    const data = {
      author: 7, ////////////////////////////////////////////////TO UPDATE
      topic: this.artworkId,
      content: this.commentContentForm
    };
    console.log(data)
    this.commentService.create(data)
      .subscribe({
        next : response => {
          console.log(response);
          this.commentContentForm = ""
          this.getLocalComments()
        },
        error: error => {
          console.log(error);
        }
      });
  }

  postTag() : void {
    this.getLocalTags();
  }
}
