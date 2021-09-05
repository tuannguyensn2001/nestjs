import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModule } from './backend/course/course.module';
import { AuthModule } from './frontend/auth/auth.module';
import config from '../ormconfig';
import Course from './entity/Course';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Course]),
    CourseModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
