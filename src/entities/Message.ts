import {
  Entity, PrimaryColumn, CreateDateColumn, Column,
  ManyToOne, JoinColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { User } from './User';

@Entity('messages')
class Message {
  @PrimaryColumn()
  id: string;

  @Column()
  admin_id: string;

  @Column()
  text: string;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User)
  user: User;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(
    id: string, admin_id: string, text: string,
    user:User, user_id: string, created_at: Date
  ) {
    this.id = id || uuid();
    this.admin_id = admin_id;
    this.text = text;
    this.user = user;
    this.user_id = user_id;
    this.created_at = created_at;
  }
}

export { Message };
