import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  urlposts = 'http://jsonplaceholder.typicode.com/posts';

  constructor( public http: Http) {}

  getListPost(){
    return this.http.get(this.urlposts)
      .map(res => res.json());
  }

  getDetailPost(NumeroPoste:  any){
      let url = 'http://jsonplaceholder.typicode.com/posts/'+NumeroPoste+'/comments';
     return this.http.get(url)
       .map(res => res.json());
   }

}