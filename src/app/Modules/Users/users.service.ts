import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  urlusers = 'http://jsonplaceholder.typicode.com/users';

  constructor( public http: Http) {}

  getListUser(){
    return this.http.get(this.urlusers)
      .map(res => res.json());
  }

  getDetailUser(NumeroPoste:  any){
      let url = 'http://jsonplaceholder.typicode.com/users/'+NumeroPoste;
     return this.http.get(url)
       .map(res => res.json());
   }

}