import {
  Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('settings')
class Setting {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;
  
  @Column()
  chat: boolean;
  
  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor(
    id: string, username: string, chat: boolean, updated_at: Date, created_at: Date
  ) {
    this.id = id;
    if (!this.id) {
      this.id = uuid();
    }
    this.username = username;
    this.chat = chat;
    this.updated_at = updated_at;
    this.created_at = created_at;
  }
}

export { Setting }
