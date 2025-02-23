import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [
    FormsModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
  username: string = '';
  constructor(private userService: UserService) {}

  login() {
    this.userService.setUser(this.username);
  }
}
