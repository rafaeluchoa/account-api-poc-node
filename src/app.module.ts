import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { addTransactionalDataSource } from 'typeorm-transactional';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AccountModule } from './account/account.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory() {
        return {
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: '123',
          database: 'testdb',
          synchronize: true,
          logging: true,
          autoLoadEntities: true
        }
      },
      async dataSourceFactory(options) {
        return addTransactionalDataSource(new DataSource(options));
      },
    }),
    AccountModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

