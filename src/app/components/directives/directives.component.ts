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
  isGuest:boolean = false;

  handleClick() {
    this.Isloggedin = !this.Isloggedin
    }

}
