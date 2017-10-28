import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import {ActivatedRoute} from "@angular/router";

@Component ({
   selector: 'my-app',
   templateUrl: 'app/Modules/Posts/details.component.html',
   providers: [ PostsService]
})
export class DetailPosts implements OnInit {

  ListComments: any[];
  id :any;

  constructor(public PostsService: PostsService, private route: ActivatedRoute) {
     // this.route = route;
     //this.route.params.subscribe( params => console.log(params) );
   }

  ngOnInit() {
      let id = this.route.snapshot.paramMap.get('id');
      //console.log(id);
      this.PostsService.getDetailPost(id).subscribe((data) => this.ListComments = data)
  }

}