import { Component, ViewChild, AfterViewInit, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { CardComponent } from './card/card.component';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostsListComponent, NgComponentOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
 
  constructor( private viewContainer: ViewContainerRef) { }

  loadComponent(){
    this.viewContainer.createComponent(PostsListComponent);
  }

  removeComponent(){
    this.viewContainer.remove();
    //this.viewContainer.clear(); // Removes all components in the container
  }

  

}
