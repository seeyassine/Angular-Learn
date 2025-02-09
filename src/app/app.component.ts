import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { PostsListComponent } from './posts-list/posts-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
 
  @ViewChild(PostsListComponent) childMessage: any; // This is the child component object stored all data in the parent component

  message: string = '';

  messageFromChild: string = '';

  constructor() {
    console.log(this.childMessage);
  }

  ngAfterViewInit() {
    console.log(this.childMessage);
    this.message = this.childMessage.childMessage;
  }


   reciveMessage(message: string){ 
      console.log(message);
      this.messageFromChild = message;
   }

}
