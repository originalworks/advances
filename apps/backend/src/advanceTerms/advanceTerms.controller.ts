import {
  Get,
  Body,
  Post,
  Param,
  HttpCode,
  UseGuards,
  Controller,
} from '@nestjs/common';
import { Crud, CrudController } from '@dataui/crud';

import { Auth0Guard } from '../auth/auth.guard';
import { Public } from '../auth/auth.decorator';
import {
  CreateAdvanceTermsDto,
  UpdateAdvanceTermsDto,
  GetAdvanceTermByCollateralTokenAddressParamDto,
  GetAdvanceTermsByCollateralAddressesBodyDto,
} from './advanceTerms.dto';
import { AdvanceTerm } from './advanceTerms.entity';
import { AdvanceTermsService } from './advanceTerms.service';

@Crud({
  model: {
    type: AdvanceTerm,
  },
  dto: {
    create: CreateAdvanceTermsDto,
    update: UpdateAdvanceTermsDto,
  },
  routes: {
    only: [
      'getOneBase',
      'getManyBase',
      'deleteOneBase',
      'updateOneBase',
      'createOneBase',
    ],
  },
  query: {
    alwaysPaginate: true,
  },
})
@UseGuards(Auth0Guard)
@Controller('advance-terms')
export class AdvanceTermsController implements CrudController<AdvanceTerm> {
  constructor(public service: AdvanceTermsService) {}

  @Public()
  @Get('collateral/:collateralTokenAddress/:chainId')
  async getAdvanceTermByCollateralAddress(
    @Param() params: GetAdvanceTermByCollateralTokenAddressParamDto,
  ) {
    return this.service.findByCollateralTokenAddress(params);
  }

  @Public()
  @Post('collaterals')
  @HttpCode(200)
  async getAdvanceTermsByCollateralAddresses(
    @Body() body: GetAdvanceTermsByCollateralAddressesBodyDto,
  ) {
    return this.service.findAllAdvanceTermsByCollateralTokenAddresses(body);
  }
}
