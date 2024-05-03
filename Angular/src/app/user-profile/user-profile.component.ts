import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      this.currentUser = JSON.parse(userData);
    } else {
      console.error('No user data found in localStorage');
    }
  }

  onEnrollSuccess(): void {
    // Do any enrollment-related logic here
    alert('User Enrolled Successfully ✅');
  }
}
