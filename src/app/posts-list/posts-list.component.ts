import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {

 @Input() postListTitle: string = '';
 @Input() postIsLogin: boolean = false;

 @Input() postList: string[] = [];
}
