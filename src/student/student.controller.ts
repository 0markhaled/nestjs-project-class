//controllers dont house the logic of the operation, they just receive the request and send back the response
//we have to sepcify that this is a controller, we do that by using a decorator
//a controller is a class that has a bunch of methods that are called for specific routes
import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';


@Controller('students')
export class StudentController {
    @Get()
    getStudents() {
        return "All students";

    }

    // '/students' //is the route, and the getStudents() method is the handler for that route

    @Get('/:studentId')

    getStudentById(@Param('studentId') studentId: string) {    //params: { studnetId: string }

        return `Get Student with Id of ${studentId}`;
    }

    @Post()
    createStudent(
        @Body()Body
    ) {
        console.log(Body);
        return "ceates a student"
    }

    @Put('/:studentId')
    updateStudent() {
        return "updates a student"

    }
}