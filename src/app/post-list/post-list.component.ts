import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { UserService } from '../service/user.service';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule,UserComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  @Input()  usersChil: Array<any> = [];
  userService:any;
  posts: Array<any> = []
  constructor(private userServiceDI: UserService, private postService: PostService){
    this.userService = userServiceDI;
  //  this.userService = new UserService();

  // this.posts = postService.posts;
  this.posts = postService.getPost();
  }

  addPost(){
    let postData = {
      id:7,
      title: 'Post title 3',
      post: 'Dummy Post 3'
    }
    this.postService.addPostService(postData);
  }
}
