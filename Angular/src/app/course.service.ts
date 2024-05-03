import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor() { }

  getCourses() {
    // Replace this with actual course data or API call
    return [
      { title: 'Course 1', description: 'Description of Course 1', duration: '4 weeks', price: '$100' },
      { title: 'Course 2', description: 'Description of Course 2', duration: '6 weeks', price: '$150' },
      { title: 'Course 3', description: 'Description of Course 3', duration: '8 weeks', price: '$200' }
    ];
  }
}
