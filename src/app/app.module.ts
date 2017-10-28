import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { AppComponent }  from './app.component';
import { AppPosts }  from './Modules/Posts/posts.component';
import { DetailPosts }  from './Modules/Posts/details.component';
import { AppComments }  from './Modules/Comments/comments.component';
import { AppAlbums }  from './Modules/Albums/albums.component';
import { DetailAlbums }  from './Modules/Albums/details.component';
import { AppPhotos }  from './Modules/Photos/photos.component';
import { AppUsers }  from './Modules/Users/users.component';
import { DetailUsers }  from './Modules/Users/details.component';

import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
   { path: 'Posts', component: AppPosts  },
   { path: 'DetailPosts/:id', component: DetailPosts },
   { path: 'Comments', component: AppComments },
   { path: 'Albums', component: AppAlbums },
   { path: 'DetailAlbums/:id', component: DetailAlbums },
   { path: 'Photos', component: AppPhotos },
   { path: 'Users', component: AppUsers },
   { path: 'DetailUsers/:id', component: DetailUsers },
   {path: '', component: AppPosts},
];

@NgModule({
  imports:      [ BrowserModule,HttpModule, RouterModule.forRoot(appRoutes), AgmCoreModule.forRoot({ apiKey: 'AIzaSyAOiZZuAIlXhTL9J_dzYxMJwOLwuZsgatc' }) ],
  declarations: [ AppComponent, AppPosts, DetailPosts, AppComments, AppAlbums, DetailAlbums, AppPhotos, AppUsers, DetailUsers ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
