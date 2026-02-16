import { DataSourceOptions } from 'typeorm';

import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicModule, Module } from '@nestjs/common';

import { config } from './config/config';
import { AuthModule } from './auth/auth.module';
import { PinoLoggerModule } from './pinoLogger/pinoLogger.module';
import { AdvanceTermsModule } from './advanceTerms/advanceTerms.module';

@Module({})
export class AppModule {
  static forDbConnection(dbConfig: DataSourceOptions): DynamicModule {
    const imports = [
      ConfigModule.forRoot({
        load: [config],
        isGlobal: true,
      }),
      TypeOrmModule.forRoot({ ...dbConfig }),
      PinoLoggerModule,
      AdvanceTermsModule,
      AuthModule,
    ];

    return {
      module: AppModule,
      imports,
      providers: [],
    };
  }
}
