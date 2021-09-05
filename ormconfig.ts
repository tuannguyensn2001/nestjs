import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import Course from './src/entity/Course';
import User from './src/entity/User';

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'my_learn_nest',
  entities: [Course, User],
  synchronize: true
};

export default config;
