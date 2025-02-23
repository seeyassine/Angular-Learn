import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostListComponent } from "./post-list/post-list.component";
import { UserComponent } from "./user/user.component";
import { UserService } from './service/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, PostListComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[UserService]
})
export class AppComponent {
   userService : any;
   constructor(userService: UserService){
    this.userService = userService
    console.log(userService);
   }
   
}
