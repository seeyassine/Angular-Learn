import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Array<any> = [
    {id:1, title: '30' , post:'seeyassine@gmail.com'},
    {id:2, title: '350' , post:'yassine@gmail.com'},
  ]
  constructor() { }

  getPost(){
    return this.posts;
  }
}
