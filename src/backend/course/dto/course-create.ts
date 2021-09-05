import { Level } from '../../../defines/Level';
import { Status } from '../../../defines/Status';

export default class CourseCreateDTO {
  name: string;
  description: string;
  slug: string;
  price: number;
  level: Level;
  media_id: number;
  status: Status;
}
