import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AlbumsService {

  urlalbums = 'http://jsonplaceholder.typicode.com/albums';

  constructor( public http: Http) {}

  getListAlbum(){
    return this.http.get(this.urlalbums)
      .map(res => res.json());
  }

  getDetailAlbum(NumeroAlbum:  any){
      let url = 'http://jsonplaceholder.typicode.com/albums/'+NumeroAlbum+'/photos';
     return this.http.get(url)
       .map(res => res.json());
   }

}