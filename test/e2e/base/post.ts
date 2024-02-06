import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

export async function post(app: INestApplication, uri: string, req: any) {
    const response = await request(app.getHttpServer())
        .post(uri)
        .send(req)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/);
    return response.body
}