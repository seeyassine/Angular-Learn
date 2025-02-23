import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  message : string = 'Hello Parent!';
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message);
  }
}
