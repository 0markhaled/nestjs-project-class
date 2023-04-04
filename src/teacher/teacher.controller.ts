import { Controller, Get, Param, ParseUUIDPipe, Render } from '@nestjs/common';
import { FindTeacherResponseDto } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {

    constructor(private readonly teacherService: TeacherService) { }

    @Get()
    @Render('teachers')
    async getTeachers(): Promise<{ teachers: FindTeacherResponseDto[] }> {
        const teachers = this.teacherService.getTeachers();
        console.log(teachers);
        return { teachers };
    }

    @Get('/:teacherId')
    @Render('oneteacher')
    async getTeacherById(
        @Param('teacherId', new ParseUUIDPipe()) teacherId: string
    ): Promise<{ oneteacher: FindTeacherResponseDto }> {
        const oneteacher = this.teacherService.getTeacherbyId(teacherId);
        return { oneteacher };
    }
}