import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Put, Render } from '@nestjs/common';
import { students } from 'src/db';
import { FindStudentsResponseDto, CreateStudentDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {

    constructor(private readonly studentService: StudentService) { }

    @Get()
    @Render('students')
    async getStudent(): Promise<{ students: FindStudentsResponseDto[] }> {
        const students = this.studentService.getStudents();

        return { students };
    }

    @Get('/:studentId')
    @Render('onestudent')
    async getStudentById(
        @Param('studentId', new ParseUUIDPipe()) studentId: string
    ): Promise<{ onestudent: FindStudentsResponseDto }> {
        const onestudent = this.studentService.getStudentById(studentId);

        return { onestudent };
    }

    @Post()
    createStudent(
        @Body() body: CreateStudentDto
    ): StudentResponseDto {
        return this.studentService.createStudent(body);
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId', new ParseUUIDPipe()) studentId: string,
        @Body() body: UpdateStudentDto
    ): StudentResponseDto {
        return this.studentService.updateStudent(
            body,
            studentId
        )
    }

}