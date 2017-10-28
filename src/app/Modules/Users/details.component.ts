import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import {ActivatedRoute} from "@angular/router";

@Component ({
   selector: 'my-app',
   templateUrl: 'app/Modules/Users/details.component.html',
   providers: [ UsersService]
})
export class DetailUsers implements OnInit {

  ListUsersDetails: any[] = [];
  id :any;

  constructor(public UsersService: UsersService, private route: ActivatedRoute) {
     
   }

  ngOnInit() {
      let id = this.route.snapshot.paramMap.get('id');
      //console.log(id);
     // let ListDetails: any[];
      this.UsersService.getDetailUser(id).subscribe((data) =>{
        console.log(data.address.geo.lat);
        this.ListUsersDetails.push({"Nom":data.name,"lat":JSON.parse(data.address.geo.lat),"lng":JSON.parse(data.address.geo.lng)});

      });
      

  }

}