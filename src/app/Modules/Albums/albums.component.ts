import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './albums.service';

@Component ({
   selector: 'my-app',
   templateUrl: 'app/Modules/Albums/albums.component.html',
   providers: [ AlbumsService]
})
export class AppAlbums implements OnInit {

  ListAlbums: any[];

  constructor(public AlbumsService: AlbumsService) { }

  ngOnInit() {
    this.AlbumsService.getListAlbum().subscribe((data) => this.ListAlbums = data)
  }

}