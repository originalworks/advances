import { Repository, In } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';

import {
  GetAdvanceTermsByCollateralAddressesBodyDto,
  GetAdvanceTermByCollateralTokenAddressParamDto,
} from './advanceTerms.dto';
import { AdvanceTerm } from './advanceTerms.entity';

@Injectable()
export class AdvanceTermsService extends TypeOrmCrudService<AdvanceTerm> {
  private static readonly logger = new Logger(AdvanceTermsService.name);

  constructor(
    @InjectRepository(AdvanceTerm)
    private advanceTermsRepo: Repository<AdvanceTerm>,
  ) {
    super(advanceTermsRepo);
  }

  async findByCollateralTokenAddress({
    collateralTokenAddress,
    chainId,
  }: GetAdvanceTermByCollateralTokenAddressParamDto): Promise<AdvanceTerm> {
    try {
      return await this.advanceTermsRepo.findOneByOrFail({
        collateralTokenAddress,
        chainId,
      });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async findAllAdvanceTermsByCollateralTokenAddresses({
    chainId,
    tokenAddresses,
  }: GetAdvanceTermsByCollateralAddressesBodyDto): Promise<AdvanceTerm[]> {
    const res = await this.advanceTermsRepo.findBy({
      chainId,
      collateralTokenAddress: In(tokenAddresses),
    });
    return res.sort((a, b) => a.id - b.id);
  }
}
