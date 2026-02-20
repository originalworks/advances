import {
  IsArray,
  Matches,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEthereumAddress,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateAdvanceTermsDto {
  @IsNotEmpty()
  @IsString()
  @IsEthereumAddress()
  @Transform(({ value }) => value.toLowerCase())
  collateralTokenAddress: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^\d+$/, {
    message: 'feePercentagePpm must be a string containing only digits',
  })
  feePercentagePpm: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^\d+$/, {
    message: 'maxAdvanceAmount must be a string containing only digits',
  })
  maxAdvanceAmount: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^\d+(\.\d{1,4})?$/, {
    message:
      'ratio must be a string representing a positive number with up to 4 decimal places',
  })
  ratio: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^\d+$/, { message: 'chainId must be a numeric string' })
  chainId: string;
}

export class UpdateAdvanceTermsDto {
  @IsOptional()
  @IsEthereumAddress()
  @Transform(({ value }) => value.toLowerCase())
  collateralTokenAddress?: string;

  @IsOptional()
  @IsString()
  @Matches(/^\d+$/, {
    message: 'feePercentagePpm must be a string containing only digits',
  })
  feePercentagePpm?: string;

  @IsOptional()
  @IsString()
  @Matches(/^\d+$/, {
    message: 'maxAdvanceAmount must be a string containing only digits',
  })
  maxAdvanceAmount?: string;

  @IsOptional()
  @IsString()
  @Matches(/^\d+(\.\d{1,4})?$/, {
    message:
      'ratio must be a string representing a positive number with up to 4 decimal places',
  })
  ratio?: string;

  @IsOptional()
  @IsString()
  @Matches(/^\d+$/, { message: 'chainId must be a numeric string' })
  chainId?: string;
}

export class GetAdvanceTermByCollateralTokenAddressParamDto {
  @IsEthereumAddress()
  @Transform(({ value }) => value.toLowerCase())
  collateralTokenAddress: string;

  @IsString()
  @Matches(/^\d+$/, { message: 'chainId must be a numeric string' })
  chainId: string;
}

export class GetAdvanceTermsByCollateralAddressesBodyDto {
  @IsString()
  @Matches(/^\d+$/, { message: 'chainId must be a numeric string' })
  chainId: string;

  @IsArray()
  @IsString({ each: true })
  @Transform(({ value }) =>
    Array.isArray(value)
      ? value.map((v: string) => v.toLowerCase())
      : [String(value).toLowerCase()],
  )
  tokenAddresses: string[];
}
