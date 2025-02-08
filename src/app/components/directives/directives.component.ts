import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgIf, NgTemplateOutlet, NgFor],
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
  userRole:string = 'Member';

  items: any = ['item1', 'item2', 'item3', 'item4', 'item5'];

  users: Array<string> = ['Yassine', 'Anas', 'Mohamed', 'Hassan', 'Omar'];

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
