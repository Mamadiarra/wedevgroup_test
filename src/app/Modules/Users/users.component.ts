import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component ({
   selector: 'my-app',
   templateUrl: 'app/Modules/Users/users.component.html',
   providers: [ UsersService]
})
export class AppUsers implements OnInit {

  ListUsers: any[];

  constructor(public UsersService: UsersService) { }

  ngOnInit() {
    this.UsersService.getListUser().subscribe((data) => this.ListUsers = data)
  }

}