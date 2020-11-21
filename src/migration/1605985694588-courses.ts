import { MigrationInterface, QueryRunner } from 'typeorm';

export class courses1605985694588 implements MigrationInterface {
  name = 'courses1605985694588';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `course` (`id` varchar(36) NOT NULL, `createdBy` varchar(300) NOT NULL, `lastChangedBy` varchar(300) NOT NULL, `name` varchar(300) NOT NULL, `description` varchar(300) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `course`');
  }
}
