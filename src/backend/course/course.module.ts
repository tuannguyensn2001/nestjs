import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Course from '../../entity/Course';

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  controllers: [CourseController],
  providers: [CourseService]
})
export class CourseModule {}
