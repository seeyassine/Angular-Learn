import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Initial value is 'null' indicating no user is logged in
  private userSubject = new BehaviorSubject<string | null>(null);

  // Observable that components can subscribe to
  user$: Observable<string | null> = this.userSubject.asObservable();

  setUser(username: string){
    this.userSubject.next(username);
  }

  logout(){
    this.userSubject.next(null);
  }

}
