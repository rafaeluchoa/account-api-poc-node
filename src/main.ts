import { NestFactory } from '@nestjs/core';
import { INestApplication, Logger } from '@nestjs/common';
import { initializeTransactionalContext } from 'typeorm-transactional';
import "reflect-metadata"
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function swagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle("tt04")
    .setDescription("dsc")
    .setVersion("1.0.0")
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  Logger.log('Mapped {/api-docs, GET} Swagger api route', 'RouterExplorer');
}

async function bootstrap() {

  initializeTransactionalContext();

  const app = await NestFactory.create(AppModule, {
    abortOnError: true,
  });

  swagger(app);

  await app.listen(3000);
}
bootstrap();
