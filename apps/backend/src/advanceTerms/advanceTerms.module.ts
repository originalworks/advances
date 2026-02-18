import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AdvanceTerm } from './advanceTerms.entity';
import { AdvanceTermsService } from './advanceTerms.service';
import { AdvanceTermsController } from './advanceTerms.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AdvanceTerm])],
  providers: [AdvanceTermsService],
  exports: [AdvanceTermsService],
  controllers: [AdvanceTermsController],
})
export class AdvanceTermsModule {}
