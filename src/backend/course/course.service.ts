import { Injectable } from '@nestjs/common';
import CourseCreateDTO from './dto/course-create';
import Course from '../../entity/Course';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course) private courseRepository: Repository<Course>
  ) {}

  public async create(course: CourseCreateDTO): Promise<Course> {
    const newCourse = this.courseRepository.create(course);
    return this.courseRepository.save(newCourse);
  }
}
