import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-component.component.html',
  styleUrl: './navbar-component.component.css'
})
export class NavbarComponentComponent implements OnInit ,OnDestroy{
  username: string | null = null;
  userSubscription: Subscription | null = null;

  constructor(private userService: UserService){}

  ngOnInit() {
  //  this.userSubscription = 
    // Subscribe to the BehaviorSubject
    this.userService.user$.subscribe(username => {
      this.username = username;
    });
  }

  logout() {
    this.userService.logout();
  }

  ngOnDestroy() {
    // Unsubscribe when the component is destroyed
    this.userSubscription?.unsubscribe();
  }
}
