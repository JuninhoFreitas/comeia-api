import { Column, DeleteDateColumn, Entity, PrimaryColumn } from 'typeorm';

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
}

export default Task;
