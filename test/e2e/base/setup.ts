import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { bootstrap } from '../../../src/bootstrap';

let app: INestApplication;

beforeAll(async () => {
  app = await bootstrap();
});

afterAll(async () => {
  await app.close();
});

export async function post(uri: string, req: any) {
  const response = await request(app.getHttpServer())
    .post(uri)
    .send(req)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/);
  return response.body;
}
