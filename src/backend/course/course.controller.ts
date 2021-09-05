import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post
} from '@nestjs/common';
import CourseCreateDTO from './dto/course-create';
import { MyResponse } from '../../defines/MyResponse';
import { CourseService } from './course.service';
import Course from '../../entity/Course';

@Controller('/api/v1/backend/courses')
export class CourseController {
  constructor(private service: CourseService) {}

  @Get('/')
  public index() {
    return 'hello';
  }

  @Post('/')
  public async store(
    @Body() course: CourseCreateDTO
  ): Promise<MyResponse<Course>> {
    try {
      const result = await this.service.create(course);
      return {
        message: 'done',
        data: result
      };
    } catch (e) {
      throw e;
    }
  }
}
