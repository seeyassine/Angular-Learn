import { CommonModule, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgIf, NgTemplateOutlet, NgFor ,CommonModule],
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

  usersRole: string = 'Admin';

  items: any = ['item1', 'item2', 'item3', 'item4', 'item5'];

  users: Array<string> = ['Yassine', 'Anas', 'Mohamed', 'Hassan', 'Omar'];

  usersObj: Array<User> = []

  constructor() { 
  console.log(this.usersObj.length); 
  }

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

      addNewUser(){
        let user = {id:6, name: 'User 1', email:'user1@gmail.com' , age: 50}
        this.usersObj.push(user);
      }

      // delete use user  
      onDelete(user: User){
       let index = this.usersObj.indexOf(user);
      //  console.log(index);
       this.usersObj.splice(index, 1);  // remove 1 element from the index
      }

      // delete use index
      onDeleteUser(index: number){
        this.usersObj.splice(index, 1);  // remove 1 element from the index
       }

}
