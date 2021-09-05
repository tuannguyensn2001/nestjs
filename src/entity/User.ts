import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    unique: true
  })
  email: string;

  @Column({
    type: 'timestamp',
    nullable: true
  })
  email_verified_at: Date;

  @Column()
  password: string;

  @CreateDateColumn({
    type: 'timestamp'
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp'
  })
  updated_at: Date;
}
