import { Injectable } from '@angular/core';
import { Teacher } from 'src/app/domain/entities/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teachers: Teacher[] = [
    {
      id: 1,
      email: 'sara@gmail.com',
      name: 'Sara'
    },
    {
      id: 2,
      email: 'gustavowagner@gmail.com',
      name: 'Gustavo'
    }
  ]

  constructor() { }

  getTeachers(): Teacher[] {
    return this.teachers;
  }

  getTeacher(teacherId: number) {
    return this.teachers.find(teacher => {
      teacher.id === teacherId;
    })
  }
}
