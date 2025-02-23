import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Array<any> = [
    {id:1, title: 'title1' , post:'seeyassine@gmail.com'},
    {id:2, title: 'title2' , post:'yassine@gmail.com'},
  ]
  constructor() { }

  getPost(){
    return this.posts;
  }

  addPostService(newPost:any){
    console.log(newPost);
    this.posts.push(newPost)
  }
  
}
