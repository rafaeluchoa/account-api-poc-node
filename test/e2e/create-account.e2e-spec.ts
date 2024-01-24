import { INestApplication } from '@nestjs/common';
import 'jest';
import * as request from 'supertest';
import { bootstrap } from '../../src/bootstrap';
import { CreateRequestDto } from '../../src/presentation/rest/dto/create.request.dto';
import { CreateResponseDto } from '../../src/presentation/rest/dto/create.response.dto';

async function post(app: INestApplication, uri: string, req: any) {
  const response = await request(app.getHttpServer())
      .post(uri)
      .send(req)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/);
  return response.body
}

describe('Account', () => {

  let app: INestApplication;
  let accountId: String;

  beforeAll(async () => {
    app = await bootstrap();
  });

  it('Create Account', async () => {
    
    const response = await post(
      app, '/api/account/create', 
      new CreateRequestDto()
    ) as CreateResponseDto;

    expect(response.account.id).toBeTruthy();
    expect(response.account.createdAt).toBeTruthy();
    expect(response.account.balance).toEqual(0.0);

    accountId = response.account.id
    
  });

  afterAll(async () => {
    await app.close();
  });
});
