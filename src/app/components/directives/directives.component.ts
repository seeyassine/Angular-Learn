import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgIf],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  Isloggedin: boolean = false;
  username:string = 'logged in';
  isAdmin:boolean = false;
  isMember:boolean = false;
  isGuest:boolean = true;

  loginCount:number = 0;

  handleClick() {
    this.Isloggedin = !this.Isloggedin;
    this.isAdmin = !this.isAdmin;
    this.isMember = !this.isMember;
    this.isGuest = !this.isGuest;
    }

    countLoginAttempts() {
      this.loginCount++;
      console.log(this.loginCount);
      }

}
