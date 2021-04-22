import {Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
import {v4 as uuid} from 'uuid'
import { Users } from './User'

@Entity("connections")
class Connection {

  @PrimaryColumn()
  id: string;

  @Column()
  admin_id: string;

  @JoinColumn({name: "user_id"})
  @ManyToOne(() => Users)
  user: Users;

  @Column()
  user_id: string;

  @Column()
  socket_id: string;

  @CreateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id)
      this.id = uuid()
  }
}

export { Connection }