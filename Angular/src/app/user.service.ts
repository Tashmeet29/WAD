import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: any[] = [];
  private currentUser: any = null;

  constructor() { 
    const storedUsers = localStorage.getItem('users');
    if(storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  registerUser(user: any) {
    this.users.push(user);
    this.updateLocalStorage();
  }

  loginUser(username: string, password: string) {
    return this.users.find(
      (user) => user.username === username && user.password === password
    );
  }

  isLoggedIn(): boolean {
    return !!this.currentUser; // Returns true if currentUser is not null or undefined
  }

  private updateLocalStorage() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
