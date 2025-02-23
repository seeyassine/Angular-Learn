import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { UserService } from '../service/user.service';

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
  constructor(){
   this.userService = new UserService();
  }
}
