import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';

@Component ({
   selector: 'my-app',
   templateUrl: 'app/Modules/Comments/comments.component.html',
   providers: [ CommentsService]
})
export class AppComments implements OnInit {

  ListComments: any[];

  constructor(public CommentsService: CommentsService) { }

  ngOnInit() {
    this.CommentsService.getListComment().subscribe((data) => this.ListComments = data)
  }

}