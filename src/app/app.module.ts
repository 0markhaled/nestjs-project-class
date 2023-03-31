import { Module } from '@nestjs/common';
import { StudentController } from 'src/student/student.controller';
import { TeacherController } from 'src/teacher/teacher.controller';
import { StudentTeacherController } from 'src/teacher/student.controller';




@Module({  //decorator is a function that adds metadata to the class it is in
  imports: [],
  controllers: [StudentController, TeacherController, StudentTeacherController], //this is where we specify the controllers
})
export class AppModule { }
