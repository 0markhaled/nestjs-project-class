import { Controller, Get, Post, Put } from '@nestjs/common';



@Controller('teachers/:teacherId/students')
export class StudentTeacherController {



    @Get()
    getStudents() {
        return "Get all students for a teacher";
    }

    @Put(':studentId')
    updateStudentTeacher() {
        return "Update a student in a teacher's class";
    }
}

