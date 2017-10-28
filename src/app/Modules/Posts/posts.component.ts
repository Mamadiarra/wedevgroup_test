import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component ({
   selector: 'my-app',
   templateUrl: 'app/Modules/Posts/posts.component.html',
   providers: [ PostsService]
})
export class AppPosts implements OnInit {

  ListPosts: any[];

  constructor(public PostsService: PostsService) { }

  ngOnInit() {
    this.PostsService.getListPost().subscribe((data) => this.ListPosts = data)
  }

}