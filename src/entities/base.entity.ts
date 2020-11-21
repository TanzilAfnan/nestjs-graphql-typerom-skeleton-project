import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  // createDateTime: datetime;

  @Column({ type: 'varchar', length: 300 })
  createdBy: string;

  // @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  // lastChangedDateTime: datetime;

  @Column({ type: 'varchar', length: 300 })
  lastChangedBy: string;
}
