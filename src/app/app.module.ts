import { Module } from '@nestjs/common';
import { TeacherModule } from 'src/teacher/teacher.module';
import { StudentModule } from 'src/student/student.module';


@Module({  //decorator is a function that adds metadata to the class it is in
  imports: [TeacherModule, StudentModule]
})

export class AppModule { }
