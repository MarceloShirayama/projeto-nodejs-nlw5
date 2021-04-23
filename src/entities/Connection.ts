import {
  Entity, PrimaryColumn, CreateDateColumn, Column,
  ManyToOne, JoinColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { User } from './User';

@Entity('connections')
class Connection {
  @PrimaryColumn()
  id: string;

  @Column()
  admin_id: string;

  @Column()
  socket_id: string;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User)
  user: User;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor(
    id: string, admin_id: string, socket_id: string,
    user:User, user_id: string, created_at: Date, updated_at: Date
  ) {
    this.id = id || uuid();
    this.admin_id = admin_id;
    this.socket_id = socket_id;
    this.user = user;
    this.user_id = user_id;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
};

export { Connection };