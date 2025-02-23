import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  providers:[UserService]
})
export class UserComponent {
  userService : any
  constructor( private userServiceDI: UserService){
      this.userService = userServiceDI;
  }

}
