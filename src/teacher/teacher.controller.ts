import { Controller, Get, Post, Put } from '@nestjs/common';



@Controller('teachers')
export class TeacherController {

    @Get()
    getTeachers() {
        return "All Teachers";
    }

    @Get('/:teacherId')
    getTeacherById() {
        return "Get a Teacher by Id";
    }

    @Get('/:teacherId/students')
    getStudents() {
        return "Get all students for a teacher";
    }

    @Put('/:teacherId/students/:studentId') 
    updateStudentTeacher() {
        return "Update a teacher";
    }
}

