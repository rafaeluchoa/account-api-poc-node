import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import 'reflect-metadata';
import { initializeTransactionalContext } from 'typeorm-transactional';

import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { ExceptionHandler } from './infrastructure/presentation/ExceptionHandler';

export async function bootstrap(): Promise<INestApplication> {
  initializeTransactionalContext();

  const app = await NestFactory.create(AppModule, {
    abortOnError: true,
  });

  await swagger(app);

  app.useGlobalFilters(new ExceptionHandler());

  const configService = app.get(ConfigService);

  await app.listen(configService.get('http.port'));

  return app;
}

async function swagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('tt05')
    .setDescription('dsc')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  Logger.log('Mapped {/api-docs, GET} Swagger api route', 'RouterExplorer');
}
