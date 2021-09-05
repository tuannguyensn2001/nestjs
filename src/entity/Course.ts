import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Level } from '../defines/Level';
import { Status } from '../defines/Status';

@Entity()
export default class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column({
    // type: 'enum',
    // enum: Level,
    // default: Level._EASY
  })
  level: Level;

  @Column()
  media_id: number;

  @Column({
    // type: 'enum',
    // enum: Status,
    // default: Status._PRIVATE
  })
  status: Status;

  @CreateDateColumn({
    type: 'timestamp'
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp'
  })
  updated_at: Date;
}
