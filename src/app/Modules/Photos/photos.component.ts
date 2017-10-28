import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

@Component ({
   selector: 'my-app',
   templateUrl: 'app/Modules/Photos/photos.component.html',
   providers: [ PhotosService]
})
export class AppPhotos implements OnInit {

  ListPhotos: any[];

  constructor(public PhotosService: PhotosService) { }

  ngOnInit() {
    this.PhotosService.getListPhoto().subscribe((data) => this.ListPhotos = data)
  }

}