import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentsService {

  urlcomments = 'http://jsonplaceholder.typicode.com/comments';

  constructor( public http: Http) {}

  getListComment(){
    return this.http.get(this.urlcomments)
      .map(res => res.json());
  }

 

}