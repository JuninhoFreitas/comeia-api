import Task from '../../../tasks/typeorm/entities/Tasks';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('users')
class User {
  @PrimaryColumn({ generated: 'uuid' })
  user_id: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => Task, task => task.user)
  tasks: Task[];
}

export default User;
