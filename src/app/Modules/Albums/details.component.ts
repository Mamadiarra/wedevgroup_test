import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './albums.service';
import {ActivatedRoute} from "@angular/router";

@Component ({
   selector: 'my-app',
   templateUrl: 'app/Modules/Albums/details.component.html',
   providers: [ AlbumsService]
})
export class DetailAlbums implements OnInit {

  ListAlbums: any[];
  id :any;

  constructor(public AlbumsService: AlbumsService, private route: ActivatedRoute) {
     // this.route = route;
     //this.route.params.subscribe( params => console.log(params) );
   }

  ngOnInit() {
      let id = this.route.snapshot.paramMap.get('id');
      //console.log(id);
      this.AlbumsService.getDetailAlbum(id).subscribe((data) => this.ListAlbums = data)
  }

}