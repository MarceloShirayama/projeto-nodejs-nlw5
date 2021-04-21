import {
  Entity, PrimaryColumn, Column, CreateDateColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('users')
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(id: string, email: string, created_at: Date) {
    !id ? this.id = uuid() : this.id = id;
    this.email = email;
    this.created_at = created_at;
  }
};

export { User };
