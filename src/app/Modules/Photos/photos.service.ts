import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PhotosService {

  urlphotos = 'http://jsonplaceholder.typicode.com/photos';

  constructor( public http: Http) {}

  getListPhoto(){
    return this.http.get(this.urlphotos)
      .map(res => res.json());
  }

 

}