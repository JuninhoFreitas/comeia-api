import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('tasks')
class Task {
  @PrimaryColumn()
  task_id: string;

  @Column()
  date: Date;

  @Column()
  description: string;

  @Column()
  done: boolean;
}

export default Task;
