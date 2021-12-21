import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {GalleryService} from "../gallery/gallery.service";
import {retrievedGalleryList} from "../gallery/store/gallery.action";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  loading = false;
  allGallery$: any;

  constructor(
    private store: Store<{ gallery: any }>,
    private galleryService: GalleryService
  ) {}

  ngOnInit(): void {
    this.store.select<any>('gallery').subscribe(data => this.allGallery$ = data);


    if (this.allGallery$.length === 0) {
      console.log('Tukaj smo')
      this.galleryService.loadGallery().subscribe((gallery) => {
        this.store.dispatch(
          retrievedGalleryList({ allGallery: gallery })
        );
      });
    }
  }
}

