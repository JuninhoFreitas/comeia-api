import User from '../../../users/typeorm/entities/Users';
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('tasks')
class Task {
  @PrimaryColumn({ generated: 'uuid' })
  task_id: string;

  @Column()
  date: Date;

  @Column()
  description: string;

  @Column()
  done: boolean;

  @DeleteDateColumn()
  deleted_at?: Date;

  @ManyToOne(() => User, user => user.tasks)
  @JoinColumn({ name: 'user_id' })
  user: User;
}

export default Task;
