import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {
  courses: any[] = []; // Assuming you have an array of courses

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    // Initialize courses array
  }

  enroll(course: any): void {
    // Check if user is logged in
    if (!this.userService.isLoggedIn()) {
      // Navigate to login page
      this.router.navigate(['/login'], { queryParams: { returnUrl: '/courses' } });
    } else {
      // User is logged in, enroll in the course
      course.enrolled = true;
      // Optionally, you can perform any additional logic here, such as updating user data or making API calls
    }
  }
}
