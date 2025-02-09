import { NgFor } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  childMessage: string = 'Hello from child Component';
  postCount: number = 0;


  parentMessage: string = "message from the Child using Click Event";

  @Output() MessageEvent = new EventEmitter();

  sendMessage() {
    console.log('button clicked');
    this.MessageEvent.emit(this.parentMessage);
  }
}
