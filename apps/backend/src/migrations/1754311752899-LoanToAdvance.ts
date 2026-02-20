import { MigrationInterface, QueryRunner } from 'typeorm';

export class LoanToAdvance1754311752899 implements MigrationInterface {
  name = 'LoanToAdvance1754311752899';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "LoanTerms" 
            RENAME COLUMN "maxLoanAmount" TO "maxAdvanceAmount"
        `);

    await queryRunner.query(`
            ALTER TABLE "LoanTerms" 
            RENAME TO "AdvanceTerms"
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "AdvanceTerms" 
            RENAME TO "LoanTerms"
        `);

    await queryRunner.query(`
            ALTER TABLE "LoanTerms" 
            RENAME COLUMN "maxAdvanceAmount" TO "maxLoanAmount"
        `);
  }
}
