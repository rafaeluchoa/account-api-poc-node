import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

// typeorm
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { addTransactionalDataSource } from 'typeorm-transactional';

// graphql
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

import configuration from './configuration';
import { AccountModule } from './infrastructure/module/account.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true, 
      load: [configuration],
    }), 
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory(config: ConfigService) {
        return {
          type: 'postgres',
          host: config.get('db.host'),
          port: config.get('db.port'),
          database: config.get('db.database'),
          username: config.get('db.username'),
          password: config.get('db.password'),
          synchronize: true,
          logging: true,
          autoLoadEntities: true
        }
      },
      async dataSourceFactory(options) {
        return addTransactionalDataSource(new DataSource(options));
      },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    AccountModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

